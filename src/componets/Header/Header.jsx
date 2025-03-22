import "./Header.css";
import logo from "../../assets/NewsExplorer-white.svg";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../context/CurrenteUserContext";
import { useContext, useState } from "react";

function Header({ activeModal, isLoggedIn, handleRegisterModal }) {
  const CurrentUser = useContext(CurrentUserContext);
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="header logo" />
      </Link>

      {isLoggedIn ? (
        <div className="header__user_info">
          <button
            className={`home__page ${activeButton === "home" ? "selected" : ""}`}
            onClick={() => handleButtonClick("home")}
          >
            Home
            <div className={`selected__button ${activeButton === "home" ? "line_active" : ""}`}></div>
          </button>
          <button
            className={`saved__articles ${activeButton === "saved" ? "selected" : ""}`}
            onClick={() => handleButtonClick("saved")}
          >
            Saved articles
            <div className={`selected__button ${activeButton === "saved" ? "line_active" : ""}`}></div>
          </button>
          <div className="user__logout-btn">
            <p className="header__username">{CurrentUser.name}</p>
          </div>
        </div>
      ) : (
        <div className='header__user_info'>
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
            onClick={() => {
              handleButtonClick("signin");
              handleRegisterModal();
            }}
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
