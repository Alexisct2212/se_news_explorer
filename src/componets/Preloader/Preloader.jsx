import "./Preloader.css";
import NothingFound from "../NothingFound/NothingFound.jsx";
function Preloader({ foundNews }) {
  if (foundNews === null) {
    return (
      <div className="Preloader">
        <div className="Preloader__search">
          <div className="circle-preloader"></div>
          <p className="Preloader__text"> Searching for news ...</p>
        </div>
      </div>
    );
  }

  if (foundNews === false) {
    return <NothingFound/>;
  }

  return null; // Hide preloader when it's not needed
}

export default Preloader;