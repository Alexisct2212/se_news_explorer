import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
import Header from "../Header/Header";
import SearchForm from "../searchForm/SearchForm";
import React,{useState} from "react";
import NewsApi from "../../utils/NewsApi";
function Main({isLoggedIn,activeModal,handleLoginModal,handleRegisterModal,handleSignout}) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const API_KEY = "9311ed1a839b439e8feb735c8169a497";

  const fetchNews = async (term) => {
    if (!term) return;
    setLoading(true);
    setError(null);
    setHasSearched(true);
    try {
      const articles = await NewsApi(API_KEY,term);
      if (!articles || articles.length === 0) {
        throw new Error("No news found");
      }

      setNews(articles);
    } catch (err) {
      setError(err.message);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="Main">
      <Header 
      isLoggedIn={isLoggedIn}
      activeModal={activeModal}
      handleLoginModal={handleLoginModal}
      handleRegisterModal={handleRegisterModal}
      handleSignout={handleSignout}/>
      <section className="Main__div">
      <h1 className="Main__text">What's going on in the world?</h1>
      <h2 className="Main__subtext">Find the latest news on any topic and save them in your personal account</h2>
      <SearchForm setSearchTerm={setSearchTerm} onSearch={fetchNews} />
      </section>
      <NewsCard
      news={news}
      loading={loading}
      error={error}
      hasSearched={hasSearched}
      isLoggedIn={isLoggedIn}
      />
      <About/>
    </main>
   
  );
}

export default Main;