import "./Header.css";
import logo from "../../assets/NewsExplorer-white.svg";
import blackLogo from "../../assets/NewsExplorer.svg"
import { Link,useLocation } from "react-router-dom";
import CurrentUserContext from "../../context/CurrenteUserContext";
import { useContext, useState } from "react";
import logOutWhite from "../../assets/logout-white.png";
import logOut from "../../assets/logout.png";
import menu from "../../assets/menu.png"
import blackmenu from "../../assets/menu-saved-news.png"
function Header({ activeModal, isLoggedIn,handleLoginModal,handleSignout}) {
  const CurrentUser = useContext(CurrentUserContext);
  const location =useLocation();
  const [activeButton, setActiveButton] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const handleButtonClick = (button) => {
    setActiveButton(button);
    
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const isHome = location.pathname === "/";

  return (
    <header className={`header ${isHome ? "header--transparent" : "header--white"}`}>
      <Link to="/" className="header__link-home">
        <img className="header__logo" src={isHome ? logo : blackLogo } alt="header logo" />
      </Link>
      <button className="header__menu-toggle" onClick={toggleMenu}>
        <span className={`${isHome ? "menu-icon": "black-menu-icon"}`} src={`${isHome ? menu: blackmenu}`}></span>
      </button>
      <nav className={`header__nav ${menuOpen ? "header__menu--open" : ""}`}>
      {isLoggedIn ? (
        <>
          <Link to="/">
          <button
            className={`header__home-page ${isHome  ? "selected" : ""}`}
            onClick={() => handleButtonClick("home")}
          >
            Home
            <div className={`selected__button ${isHome  ? "line_active" : ""}`}></div>
          </button>
          </Link>
          <Link to="/saved-news">
          <button
            className={`header__savedArticles-btn ${!isHome  ? "selected" : ""}`}
            onClick={() => handleButtonClick("saved")}
          >
            Saved articles
            <div className={`selected__button ${!isHome  ? "line_active" : ""}`}></div>
          </button>
          </Link>
          <button className="header__logout-btn" onClick={handleSignout}>
            <p className="header__username-title">{CurrentUser.name}</p>
            <img src={isHome ? logOutWhite : logOut} alt="logout btn" className="header__logout-img" />
          </button>
        </>
      ) : (
        <>
          <button
            className={`header__home-page ${isHome ? "selected" : ""}`}
            onClick={() => {setMenuOpen(false);handleButtonClick("home")}}
          >
            Home
            <div className={`selected__button ${isHome  ? "line_active" : ""}`}></div>
          </button>
          
          <button
            className={`header__signup-btn ${activeButton === "signin" ? "selected" : ""}`}
            type="button"
            onClick={()=>{setMenuOpen(false); handleLoginModal();}}
          >
            Sign in
            <div className={`selected__button ${activeButton === "signin" ? "line_active" : ""}`}></div>
            
          </button>
          
        </>
      )}
      </nav>
    </header>
  );
}

export default Header;
