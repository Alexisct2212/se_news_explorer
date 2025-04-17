const newsApiBaseUrl = process.env.NODE_ENV === "production" 
? "https://nomoreparties.co/news/v2/everything"
: "https://newsapi.org/v2/everything";
  const NewsApi = async (apiKey,searchTerm) => {
    try {
      const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 30);

    const fromDate = sevenDaysAgo.toISOString().split("T")[0];
    const toDate = today.toISOString().split("T")[0];
      const response = await fetch(`${newsApiBaseUrl}?q=${searchTerm}}&sortBy=publishedAt&language=en&pageSize=100&apiKey=${apiKey}`);

  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`); // ❌ Handle fetch errors
      }
  
      const data = await response.json();
      const filtered = data.articles.filter((article) => {
        const hasImage = article.urlToImage;
        const keyword = searchTerm.toLowerCase();
        const title = article.title?.toLowerCase() || "";
        const description = article.description?.toLowerCase() || "";
        return hasImage && (title.includes(keyword) || description.includes(keyword));
      });
  
      console.log("Filtered articles:", filtered);
      return filtered;
    } catch (error) {
      console.error("Error fetching news:", error.message);
      return []; // ❌ Return empty array on failure
    }
  };
  
  export default NewsApi;