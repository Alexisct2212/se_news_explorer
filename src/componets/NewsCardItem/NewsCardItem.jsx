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
<div className="news-card__tooltip">
<button
  className={
    isHome
      ? `news-card__save-button ${alreadySaved ? "news-card__save-button--active" : ""}`
      : "news-card__delete-button"
  }
  onClick={ isLoggedIn ? handleClick : undefined}
/>
  
  {!isLoggedIn && isHome && (
    <span className="news-card__modal-save">Login to save article</span>
  )}

  {!isHome &&(
    <span className="news-card__modal-delete">Remove from saved</span>
  )}
</div>
{!isHome&& <div className="news-card__keyword-tooltip">
    <span className="news-card__keyword-text">{keyword}</span>
  </div>}
     <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-card__link">
      <h3 className="news-card__date">
        {new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone:"UTC"
        })}
      </h3>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <h4 className="news-card__source">
        {article.source?.id || article.source?.name || "unknown Source"}
      </h4>
      </a>
    </div>
   
  );
}

export default NewsCardItem;
