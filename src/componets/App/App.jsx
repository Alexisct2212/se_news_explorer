import "./App.css"
//imported Components
import About from "../About/About"
import AddNewsModal from "../AddNewsModal/AddNewsModal"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Main from "../Main/Main"
import NewsCard from "../NewsCard/NewsCard"
import Preloader from "../Preloader/Preloader"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import LoginModal from "../LoginModal/LoginModal"
import RegisterModal from "../RegisterModal/RegisterModal"
import SearchForm from "../searchForm/SearchForm"
import Profile from "../Profile/Profile"
import SavedNews from "../SavedNews/SavedNews"
// imported 
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
function App(){
    const [activeModal, setActiveModal] = useState("");
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [foundNews, setFoundNews] = useState(false)
    const navigate = useNavigate();
    //Open And Close func
    const handleAddClick = () => {
        setActiveModal("add-garment");
      };
      const handleCardClick = (card) => {
        setActiveModal("preview");
        setSelectedCard(card);
      };
      const closeActiveModal = () => {
        setActiveModal("");
        setSelectedCard({});
      };
    return(
    <div className="page">
      <div className="page__content">
      
      <Routes>
        <Route
        path="/"
        element={
          <Main
          isLoggedIn={isLoggedIn}
          foundNews={foundNews}
          />
        }
        />
        <Route
        path="/saved-news"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <SavedNews></SavedNews>
          </ProtectedRoute>
        }
        />
      </Routes>
      <Preloader
      foundNews={foundNews}
      />
      <About/>
      <Footer/>
      </div>
    </div>
    );
}
export default App