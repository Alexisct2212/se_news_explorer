import { useContext } from "react";
import CurrentUserContext from "../../context/CurrenteUserContext";
import "../NewsCard/NewsCard.css";
import "./NewsCardItem.css";
import { useLocation } from "react-router-dom";
function NewsCardItem({ article, isSaved, onSave, onDelete, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleClick = () => {
    const saved = JSON.parse(localStorage.getItem("savedArticles")) || [];
    const alreadySaved = saved.some((a) => a.url === article.url);
    if (isSaved && onDelete) {
      onDelete(article);
    } else if (!alreadySaved) {
      // Save logic
      const updated = [article, ...saved];
      localStorage.setItem(
        "savedArticles",
        JSON.stringify([article, ...saved])
      );
    }
  };
  
  return (
    <div className="news-card" width="350">
      <img
        src={article.urlToImage}
        alt={article.title}
        width="300"
        height="200"
      />
<div className="news__tooltip-container">
  <button
    className={isHome ? "news__save_btn" : "news__delete-btn"}
    onClick= {handleClick} 
  />
  
  {isLoggedIn && isHome && (
    <span className="news__tooltip-save">Login to save article</span>
  )}

  {!isHome && (
    <span className="news__tooltip-delete">Remove from saved</span>
  )}
</div>
 
{!isHome&& <div className="news-card__keyword-tooltip">
    <span className="news-card__keyword-text"></span>
  </div>}

      <p className="news__date">
        {" "}
        {new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <h3 className="news__sourceName">
        {article.source?.id || article.source?.name || "unknown Source"}
      </h3>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default NewsCardItem;
