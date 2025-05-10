import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './componets/App/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/se_news_explorer'>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);
