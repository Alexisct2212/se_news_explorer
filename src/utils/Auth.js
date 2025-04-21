const baseUrl = "http://localhost:3001";

function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
  
  function logIn({ email, password }) {
    return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(checkResponse);
  }
  
  function registerUser({ email, password, name}) {
    return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name}),
    }).then(checkResponse);
  }
  
  function getUserProfile(token) {
    return fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(checkResponse);
  }
  
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
  
  export {
    logIn,
    registerUser,
    getUserProfile,
    saveArticle,
    deleteArticle,
  };
