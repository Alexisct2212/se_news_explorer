import { baseUrl } from "./Auth";
function getArticles() {
    return fetch(`${baseUrl}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    }).then(checkResponse);
  };

  function saveArticle(article, token) {
    return fetch(`${baseUrl}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(article),
    }).then(checkResponse);
  }
  
  function deleteArticle(articleId, token) {
    return fetch(`${baseUrl}/articles/${articleId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(checkResponse);
  }
  export {deleteArticle,saveArticle,getArticles}