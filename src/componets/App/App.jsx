import "./App.css"
//imported Components
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Main from "../Main/Main"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import LoginModal from "../LoginModal/LoginModal"
import RegisterModal from "../RegisterModal/RegisterModal"
import SavedNews from "../SavedNews/SavedNews"
import CurrentUserContext from "../../context/CurrenteUserContext"
// imported 
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
//
function App(){
    const [activeModal, setActiveModal] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [foundNews, setFoundNews] = useState(false)
    const navigate = useNavigate();
    //Open And Close func
    
      const closeActiveModal = () => {
        setActiveModal("");
      };
      const handleLoginModal = () => {
        console.log("Login Modal Opened!");
        setActiveModal("login"); 
      };
      const handleRegisterModal = () => {
        setActiveModal("signup");
      };
    return(
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
      <Header 
      isLoggedIn={isLoggedIn}
      activeModal={activeModal}
      handleLoginModal={handleLoginModal}
      handleRegisterModal={handleRegisterModal}/>
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
            <SavedNews 
            isLoggedIn={isLoggedIn}
            />
          </ProtectedRoute>
        }
        />
      </Routes>
      
      <LoginModal
            activeModal={activeModal}
            closeActiveModal={closeActiveModal}
            handleLoginModal={()=>handleLoginModal("login")}
            handleRegisterModal={() => handleRegisterModal("signup")}
            isOpen={activeModal === "login"}
            
          />
       <RegisterModal
            activeModal={activeModal}
            handleLoginModal={() => handleLoginModal("login")}
            handleRegisterModal={()=>handleRegisterModal("signup")}
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "signup"}
            
          />
      
      <Footer/>
      </div>
      </CurrentUserContext.Provider>
    </div>
    );
}
export default App