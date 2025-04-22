import "./NewsCard.css";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import NewsApi from "../../utils/NewsApi";
import SearchForm from "../searchForm/SearchForm";
import NewsCardItem from "../NewsCardItem/NewsCarditem";

const API_KEY = "9311ed1a839b439e8feb735c8169a497";

const NewsCard = ({isLoggedIn}) => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  // ✅ Function to fetch news
  const fetchNews = async (searchTerm) => {
    if (!searchTerm)return ;
    setLoading(true);
    setError(null);
    setHasSearched(true); // ✅ Mark as searched
    

    try {
      const articles = await NewsApi(API_KEY,searchTerm);
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

  

  // ✅ Filter articles based on search term
  const filteredNews = news.filter((article) =>
    article.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="news-container">
    {/* 🔍 Search Bar */}
    <SearchForm setSearchTerm={setSearchTerm} onSearch={fetchNews} />

    {/* 🔄 Preloader */}
    {loading && <Preloader foundNews={null} />}

    {/* ❌ Error Message */}
    {!loading && error && <Preloader foundNews={false} />}

    {/* ✅ Display News Cards */}
    {!loading && !error && news.length > 0 && (
      <div className="news-list">
        <p className="NewsCard__search-p">Search results</p>
        {news.slice(0, visibleCount).map((article, index) => (
          <NewsCardItem
             key={index}
              article={article}
              isSaved={false}
              fromSavedPage={true}
              isLoggedIn={isLoggedIn}
          />
        ))}
      </div>
    )}

    {/* ➕ Show More Button */}
    {visibleCount < news.length && (
      <button onClick={() => setVisibleCount(visibleCount + 3)} className="Showmore__btn">Show More</button>
    )}
  </div>
  );
};

export default NewsCard;
