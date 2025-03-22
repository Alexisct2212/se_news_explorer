import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../searchForm/SearchForm";
function Main() {
  
  return (
    <main className="Main">
      <Header/>
      <div className="Main__div">
      <p className="Main__text">What's going on in the world</p>
      <p className="Main__subtext">Find the latest news on any topic and save them in your personal account</p>
      <SearchForm/>
      </div>
    </main>
  );
}

export default Main;