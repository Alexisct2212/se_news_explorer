import "./Preloader.css";

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
    return (
      <div className="Preloader">
        <div className="Preloader_Error">
          <div className="face">
            <div className="eye left-eye"></div>
            <div className="eye right-eye"></div>
            <div className="mouth"></div>
            <div className="stick"></div>
          </div>
          <div className="text">
            <p className="Preloader__Main-text">Nothing Found</p>
            <p className="preloader__subtext">Sorry, but nothing matched your search terms.</p>
          </div>
        </div>
      </div>
    );
  }

  return null; // Hide preloader when it's not needed
}

export default Preloader;