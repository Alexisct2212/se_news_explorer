import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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

  const handleClick = (e) => {
    e.preventDefault();
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
      <LazyLoadImage
        loading="lazy"
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
  onClick={ isLoggedIn ? handleClick : undefined}
/>
  
  {!isLoggedIn && isHome && (
    <span className="news__tooltip-save">Login to save article</span>
  )}

  {!isHome &&(
    <span className="news__tooltip-delete">Remove from saved</span>
  )}
</div>
{!isHome&& <div className="news-card__keyword-tooltip">
    <span className="news-card__keyword-text">{keyword}</span>
  </div>}
     <a href={article.url} target="_blank" rel="noopener noreferrer" className="newscard_anchor-url">
      <h1 className="news_card-date">
        {new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <h3 className="news__sourceName-title">
        {article.source?.id || article.source?.name || "unknown Source"}
      </h3>
      </a>
    </div>
   
  );
}

export default NewsCardItem;
