import "../Preloader/Preloader.css"
function NothingFound(){
  return(
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
            <p className="preloader__subtext">Sorry, but nothing matched,
               your search terms.</p>
          </div>
        </div>
      </div>
  );
}
export default NothingFound