import "../Preloader/Preloader.css"
import ErrorImg from "../../assets/not-found_v1.svg"
function NothingFound(){
  return(
    <div className="Preloader">
        <div className="Preloader_Error">
         
          <img src={ErrorImg} alt="Error img" className="Preloader__Error-img" />
          
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