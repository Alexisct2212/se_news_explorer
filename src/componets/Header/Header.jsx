import "./Header.css";
import logo from "../../assets/NewsExplorer-white.svg";
import { Link,useLocation } from "react-router-dom";
import CurrentUserContext from "../../context/CurrenteUserContext";
import { useContext, useState } from "react";
import logOutWhite from "../../assets/logout-white.png";
import logOut from "../../assets/logout.png";
function Header({ activeModal, isLoggedIn,handleLoginModal}) {
  const CurrentUser = useContext(CurrentUserContext);
  const location =useLocation();
  const [activeButton, setActiveButton] = useState("");
  const handleButtonClick = (button) => {
    setActiveButton(button);
    
  };
  const isHome = location.pathname === "/";

  return (
    <header className={`header ${isHome ? "header--transparent" : "header--white"}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="header logo" />
      </Link>

      {isLoggedIn ? (
        <div className="header__user_info">
          <Link to="/">
          <button
            className={`home__page ${activeButton === "home" ? "selected" : ""}`}
            onClick={() => handleButtonClick("home")}
          >
            Home
            <div className={`selected__button ${activeButton === "home" ? "line_active" : ""}`}></div>
          </button>
          </Link>
          <Link to="/saved-news">
          <button
            className={`saved__articles ${activeButton === "saved" ? "selected" : ""}`}
            onClick={() => handleButtonClick("saved")}
          >
            Saved articles
            <div className={`selected__button ${activeButton === "saved" ? "line_active" : ""}`}></div>
          </button>
          </Link>
          <button className="user__logout-btn" onClick={handleButtonClick}>
            <p className="header__username">user__name</p>
            <img src={isHome ? logOutWhite : logOut} alt="logout btn" className="logout__header-img"/>
          </button>
        </div>
      ) : (
        <div className={`header__user_info ${activeModal === "login" && "modal_opened"}`}>
          <button
            className={`home__page ${activeButton === "home" ? "selected" : ""}`}
            onClick={() => handleButtonClick("home")}
          >
            Home
            <div className={`selected__button ${activeButton === "home" ? "line_active" : ""}`}></div>
          </button>
          
          <button
            className={`header__signup ${activeButton === "signin" ? "selected" : ""}`}
            type="button"
            onClick={()=>handleLoginModal()}
          >
            Sign in
            <div className={`selected__button ${activeButton === "signin" ? "line_active" : ""}`}></div>
            
          </button>
          
        </div>
      )}
      
    </header>
  );
}

export default Header;
