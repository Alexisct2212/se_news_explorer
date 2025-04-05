const NewsApi = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&apiKey=9311ed1a839b439e8feb735c8169a497

`);
  
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