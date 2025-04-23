import "./About.css";
import avatar from "../../assets/about_me_avatar.avif"
function About() {
  return (
    <div className="About">
      <img className="about_me-avatar" src={avatar}/>
      <div className="around__circle">
      <h1 className="About_main-text">About the Author</h1>
      <p className="about__subtext">My name is Alexis, I'm 22 years old. I've always been passionate about technology, 
        and I decided to become a software engineer. I started studying at school, but they didn't teach me anything. 
        I didn't have any interesting classes, so I decided to drop out, but I was always interested in programming. After a year, 
        I decided to enroll in a program to learn and start a career. That's when I decided to enroll in Tripleten, and now I'm almost finished. 
        I'm very happy to become a software engineer and start a career where I feel very confident in my abilities.

      </p>
      <p className="about__subtext_2">
        My skills are Javascript,React,CSS,HTML,node.js,
        mongoDB,SQL,Python,Git/bash and npm, 
        for fun I like to play Videogames,go to the Gym and Drive
      </p>
      </div>
    </div>
  );
}

export default About;