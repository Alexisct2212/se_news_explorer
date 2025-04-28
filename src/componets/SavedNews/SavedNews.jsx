import { useContext, useEffect, useState,useMemo } from "react";
import CurrentUserContext from "../../context/CurrenteUserContext";
import "./SavedNews.css";
import NewsCardItem from "../NewsCardItem/NewsCarditem";

function SavedNews({ isLoggedIn }) {
  const CurrentUser = useContext(CurrentUserContext);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedArticles");
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        setSavedArticles(parsed);
      } else {
        setSavedArticles([]); // fallback if not an array
      }
    } catch (error) {
      console.error("Invalid savedArticles in localStorage:", error);
      setSavedArticles([]); // fallback if JSON is invalid
    }
  }, []);


  const handleDelete = (deletedArticle) => {
    const updated = savedArticles.filter((a) => a.url !== deletedArticle.url);
    setSavedArticles(updated);
    localStorage.setItem("savedArticles", JSON.stringify(updated));
  };

  // 🔠 Extract keywords from saved articles
  
  const keywordList = useMemo(() => {
    if (!Array.isArray(savedArticles)) return [];
  
    const keywordCounts = {};
  
    savedArticles.forEach((article) => {
      if (!article?.title) return; // 💡 skip if title is missing
      const titleWords = article.title
        .toLowerCase()
        .replace(/[^a-z0-9 ]/gi, "")
        .split(" ")
        .filter((word) => word.length > 3);
  
      titleWords.forEach((word) => {
        keywordCounts[word] = (keywordCounts[word] || 0) + 1;
      });
    });
  
    return Object.entries(keywordCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([word]) => word)
      .slice(0, 3);
  }, [savedArticles]);

  

  return (
    <div className="Main__page-profile">
      <div className="saved__header">
        <h2 className="saved__header-text">Saved articles</h2>
        <p className="saved__header-subtext">
          {CurrentUser.name}, you have {savedArticles.length} saved{" "}
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
          savedArticles.map((article, index) => {
            // Extract one keyword from the title
            let keyword = "";
            if (article?.title) {
              const titleWords = article.title
                .toLowerCase()
                .replace(/[^a-z0-9 ]/gi, "")
                .split(" ")
                .filter((word) => word.length > 3);
              keyword = titleWords[0] || "";
            }

            return (
              <NewsCardItem
                key={index}
                article={article}
                isSaved={true}
                onDelete={handleDelete}
                keyword={keyword}
                isLoggedIn={isLoggedIn}
              />
            );
          })
        ) : (
          <div className="no-saved-Articles">
            <p className="no__saved-text">You haven't saved any article,go to home page to save any article</p>
          </div>
        )}
      </div>
    </div>
  );
}


export default SavedNews;
