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
import {getUserProfile,logIn,registerUser,saveArticle,deleteArticle} from "../../utils/Auth";
// imported 
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
//
function App(){
    const [activeModal, setActiveModal] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [foundNews, setFoundNews] = useState(false)
    const navigate = useNavigate();
    //Open And Close func
    
      const closeActiveModal = () => {
        setActiveModal("");
      };
      const handleLoginModal = () => {
        setActiveModal("login"); 
      };
      const handleRegisterModal = () => {
        setActiveModal("signup");
      };
      //use effects
      useEffect(() => {
        if (!activeModal) return;
    
        const handleEscClose = (e) => {
          if (e.key === "Escape") {
            closeActiveModal();
          }
        };
    
        document.addEventListener("keydown", handleEscClose);
    
        return () => {
          document.removeEventListener("keydown", handleEscClose);
        };
      }, [activeModal]);
       
      //useEffect for userInformation and Articles
      useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
          getUserProfile(token)
            .then((user) => {
              setCurrentUser(user);
              setIsLoggedIn(true);
            })
            .catch(() => {
              localStorage.removeItem("jwt");
              setIsLoggedIn(false);
            });
        }
      }, []);

      const handleLogin = ({ email, password }) => {
        logIn({ email, password })
          .then((res) => {
            if (!res.token) throw new Error("Token not received");
            localStorage.setItem("jwt", res.token);
            return getUserProfile(res.token);
          })
          .then((user) => {
            setCurrentUser(user);
            setIsLoggedIn(true);
            navigate("/");
            console.log(user);
            closeActiveModal()
          })
          .catch((err) => console.error("Login error:", err));
      };
      const handleRegister = (user) => {
        registerUser(user)
          .then(() => handleLogin({ email: user.email, password: user.password,name:user.name }))
          .catch(console.error);
      };
    
      const handleSignout = () => {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        setCurrentUser(null);
        navigate("/");
      };
    return(
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
      <Header 
      isLoggedIn={isLoggedIn}
      activeModal={activeModal}
      handleLoginModal={handleLoginModal}
      handleRegisterModal={handleRegisterModal}
      handleSignout={handleSignout}/>
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
            closeActiveModal={closeActiveModal}
            handleLoginModal={()=>handleLoginModal("login")}
            handleRegisterModal={() => handleRegisterModal("signup")}
            isOpen={activeModal === "login"}
            onLogIn={handleLogin}
          />
       <RegisterModal  
            handleLoginModal={() => handleLoginModal("login")}
            handleRegisterModal={()=>handleRegisterModal("signup")}
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "signup"}
            onRegister={handleRegister}
          />
      
      <Footer/>
      </div>
      </CurrentUserContext.Provider>
    </div>
    );
}
export default App