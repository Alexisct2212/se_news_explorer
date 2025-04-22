import { useContext } from "react";
import CurrentUserContext from "../../context/CurrenteUserContext";
import "../NewsCard/NewsCard.css";
import "./NewsCardItem.css";
import { useLocation } from "react-router-dom";
function NewsCardItem({ article, isSaved, onSave, onDelete, isLoggedIn,keyword }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const saved = JSON.parse(localStorage.getItem("savedArticles")) || [];
  const alreadySaved = saved.some((a) => a.url === article.url);

  const handleClick = () => {
    if (isSaved || alreadySaved && onDelete) {
      onDelete(article);
    } else if (!alreadySaved) {
      const updated = [article, ...saved];
      localStorage.setItem("savedArticles", JSON.stringify(updated));
      if (onSave) onSave(article); // optional: if you want to update state too
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
  className={
    isHome
      ? `news__save_btn ${alreadySaved ? "news__save_btn--active" : ""}`
      : "news__delete-btn"
  }
  onClick={isLoggedIn?handleClick:undefined}
/>
  
  {isLoggedIn && isHome && (
    <span className="news__tooltip-save">Login to save article</span>
  )}

  {!isHome &&(
    <span className="news__tooltip-delete">Remove from saved</span>
  )}
</div>
 
{!isHome&& <div className="news-card__keyword-tooltip">
    <span className="news-card__keyword-text">{keyword}</span>
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
