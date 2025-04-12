const NewsApi = async (apiKey,searchTerm) => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&language=en&pageSize=20&apiKey=${apiKey}`);

  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`); // ❌ Handle fetch errors
      }
  
      const data = await response.json();
      console.log("API Response:", data); // ✅ Debug API response
  
      return data.articles;
    } catch (error) {
      console.error("Error fetching news:", error.message);
      return []; // ❌ Return empty array on failure
    }
  };
  
  export default NewsApi;