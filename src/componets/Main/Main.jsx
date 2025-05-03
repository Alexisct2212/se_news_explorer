import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
import Header from "../Header/Header";
function Main({isLoggedIn,activeModal,handleLoginModal,handleRegisterModal,handleSignout}) {
  
  return (
    <main className="Main">
      <Header 
      isLoggedIn={isLoggedIn}
      activeModal={activeModal}
      handleLoginModal={handleLoginModal}
      handleRegisterModal={handleRegisterModal}
      handleSignout={handleSignout}/>
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