import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../context/CurrenteUserContext";
import "./SavedNews.css";
import NewsCardItem from "../NewsCardItem/NewsCarditem";

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
    const keywords = savedArticles
      .map((article) => article.title.split(" ")[0])
      .filter((word, i, arr) => word && arr.indexOf(word) === i);
    return keywords.slice(0, 3);
  };
  const keywordList = extractKeywords();

  return (
    <div className="Main__page-profile">
      <div className="saved__header">
        <h2 className="Saved__header-text">Saved articles</h2>
        <p>
          alexis, you have {savedArticles.length} saved{" "}
          {savedArticles.length === 1 ? "article" : "articles"}
        </p>
        {keywordList.length > 0 && (
          <p>
            By keywords: {keywordList.join(", ")}
            {savedArticles.length > 3 && `, and ${savedArticles.length - 3} others`}
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
          <p className="no-saved-message">You haven't saved any articles yet.</p>
        )}
      </div>
    </div>
  );
}

export default SavedNews;
