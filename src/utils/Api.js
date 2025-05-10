import { baseUrl,checkResponse } from "./Auth";
function getArticles() {
    return fetch(`${baseUrl}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkResponse);
  };

  function saveArticle(articleId,token) {
    return fetch(`${baseUrl}/articles/${articleId}`, {
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