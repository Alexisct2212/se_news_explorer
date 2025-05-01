import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
function Main({isLoggedIn}) {
  
  return (
    <main className="Main">
      <section className="Main__div">
      <h1 className="Main__text">What's going on in the world?</h1>
      <h2 className="Main__subtext">Find the latest news on any topic and save them in your personal account</h2>
      </section>
      <NewsCard
      isLoggedIn={isLoggedIn}
      />
      <About/>
    </main>
   
  );
}

export default Main;