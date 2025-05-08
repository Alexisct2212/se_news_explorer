import "./NewsCard.css";
import Preloader from "../Preloader/Preloader";
import NewsCardItem from "../NewsCardItem/NewsCarditem";
import { useState } from "react";


const NewsCard = ({isLoggedIn,news,loading,error,hasSearched}) => {

  const [visibleCount, setVisibleCount] = useState(3);
  
  return (
    <section className="news-container">
     
    {/* 🔄 Preloader */}
    {loading && <Preloader foundNews={null} />}

    {/* ❌ Error Message */}
    {!loading && error && <Preloader foundNews={false} />}
   
    {/* ✅ Display News Cards */}
    {!loading && !error && news.length > 0 && (
      <>
        <h2 className="news-container__main-title">Search results</h2>
      <section className="news-container__card-list">
        {news.slice(0, visibleCount).map((article, index) => (
          <NewsCardItem
             key={index}
              article={article}
              isSaved={false}
              fromSavedPage={true}
              isLoggedIn={isLoggedIn}
          />
        ))}
      </section>
      </>
    )}

    {/* ➕ Show More Button */}
    {visibleCount < news.length && (
      <button onClick={() => setVisibleCount(visibleCount + 3)} className="news-container__button">Show More</button>
    )}
  </section>
  );
};

export default NewsCard;
