import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../searchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
function Main(isLoggedIn,activeModal,handleLoginModal,handleRegisterModal) {
  
  return (
    <main className="Main">
      <div className="Main__div">
      <p className="Main__text">What's going on in the world?</p>
      <p className="Main__subtext">Find the latest news on any topic and save them in your personal account</p>
      </div>
      <NewsCard
      isLoggedIn={isLoggedIn}
      />
      <About/>
    </main>
   
  );
}

export default Main;