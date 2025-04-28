import "./About.css";
import avatar from "../../assets/about_me_avatar.avif"
function About() {
  return (
    <footer className="About">
      <img className="about_me-avatar" src={avatar} alt="this img shows a animated picture of someone that looks a like to me "/>
      <div className="around__circle">
      <h2 className="About__title">About the Author</h2>
      <p className="about__subtext">My name is Alexis, I'm 22 years old. I've always been passionate about technology, 
        and I decided to become a software engineer.I decided to enroll in a program to learn and start a career. 
        I'm very happy to become a software engineer and start a career where I feel very confident in my abilities.

      </p>
      <p className="about__subtext_2">
        My skills are Javascript,React,CSS,HTML,node.js,
        mongoDB,SQL,Python,Git/bash and npm, 
        for fun I like to play Videogames,go to the Gym and Drive
      </p>
      </div>
    </footer>
  );
}

export default About;