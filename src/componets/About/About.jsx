import "./About.css";
import avatar from "../../assets/about_me_avatar.avif"
function About() {
  return (
    <div className="About">
      <img className="about_me-avatar" src={avatar}/>
      <div className="around__circle">
      <h1 className="About_main-text">About the Author</h1>
      <p className="about__subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut culpa alias odit! Illo assumenda tempora rem fugiat ratione maiores? Beatae quisquam aut amet eveniet libero esse molestias nam suscipit?</p>
      <p className="about__subtext_2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur vitae delectus provident quod mollitia illum similique vel, molestiae temporibus, officiis deleniti aperiam assumenda iusto impedit, voluptatem eveniet minus incidunt id.</p>
      </div>
    </div>
  );
}

export default About;