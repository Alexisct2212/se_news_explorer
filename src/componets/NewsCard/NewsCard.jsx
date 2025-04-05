import "./NewsCard.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "../Preloader/Preloader";
import NewsApi from "../../utils/NewsApi";
import SearchForm from "../searchForm/SearchForm";

const API_KEY = "9311ed1a839b439e8feb735c8169a497";

const NewsCard = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  console.log(news)

  // ✅ Function to fetch news
  const fetchNews = async (term) => {
    if (!term.trim())return ;
    setLoading(true);
    setError(null);
    setHasSearched(true); // ✅ Mark as searched
    setSearchTerm(term)

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

  // ✅ Function to handle search button click
  const handleSearch = () => {
    fetchNews();
    console.log(article);
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
        {news.slice(0, visibleCount).map((article, index) => (
          <div key={index} className="news-card">
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} width="300" />
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    )}

    {/* ➕ Show More Button */}
    {visibleCount < news.length && (
      <button onClick={() => setVisibleCount(visibleCount + 3)}>Show More</button>
    )}
  </div>
  );
};

export default NewsCard;
