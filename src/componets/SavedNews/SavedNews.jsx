import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../context/CurrenteUserContext";
import "./SavedNews.css";
import NewsCardItem from "../NewsCardItem/NewsCarditem";
import { div } from "framer-motion/client";

function SavedNews({ isLoggedIn }) {
  const CurrentUser = useContext(CurrentUserContext);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(saved);
  }, []);
  const handleDelete = (deletedArticle) => {
    const updated = savedArticles.filter((a) => a.url !== deletedArticle.url);
    setSavedArticles(updated);
    localStorage.setItem("savedArticles", JSON.stringify(updated));
  };

  // 🔠 Extract keywords from saved articles
  const extractKeywords = () => {
    const keywordCounts = {};
  
    savedArticles.forEach((article) => {
      const titleWords = article.title
        ?.toLowerCase()
        .replace(/[^a-z0-9 ]/gi, "")
        .split(" ")
        .filter((word) => word.length > 3); // ignore short/common words
  
      titleWords.forEach((word) => {
        keywordCounts[word] = (keywordCounts[word] || 0) + 1;
      });
    });
  
    const sortedKeywords = Object.entries(keywordCounts)
      .sort((a, b) => b[1] - a[1]) // sort by frequency
      .map((entry) => entry[0]); // get only the word
  
    return sortedKeywords.slice(0, 3); // return top 3
  };
  const keywordList = extractKeywords();

  return (
    <div className="Main__page-profile">
      <div className="saved__header">
        <h2 className="saved__header-text">Saved articles</h2>
        <p className="saved__header-subtext">
          Alexis, you have {savedArticles.length} saved{" "}
          {savedArticles.length === 1 ? "article" : "articles"}
        </p>
        {keywordList.length > 0 && (
          <p className="saved__header-keywords">
            By keywords: <b>{keywordList.join(", ")}
            {savedArticles.length > 3 && `, and ${savedArticles.length - 3} others`}</b>
          </p>
        )}
      </div>

      <div className="news-cards-grid">
        {savedArticles.length > 0 ? (
          savedArticles.map((article, index) => (
            <NewsCardItem
              key={index}
              article={article}
              isSaved={true}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="no-saved-Articles">
          <p className="no__saved-text">You haven't saved any articles yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedNews;
