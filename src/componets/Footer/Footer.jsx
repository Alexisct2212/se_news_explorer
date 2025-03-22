import "./Footer.css";
import { SocialIcon } from 'react-social-icons'
function Footer() {
  const Facebook = <SocialIcon url="https://facebook.com" fgColor="white" bgColor="black" style={{ width: 24, height: 24 }}/>
  const Github = <SocialIcon url="https://github.com/alexisct2212" fgColor="white" bgColor="black" style={{ width: 24, height: 24 }}/>
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__left-side">
      <p className="footer__year">{year}</p>
      <p className="footer__developer">Developed by Alexis Castillo</p>
      </div>
      <div className="footer__right-side">
      <p className="home__btn">Home</p>
      <p className="Tripleten__url">Tripleten</p>
      <SocialIcon
  url="https://github.com/alexisct2212"
  target="_blank"
  rel="noopener noreferrer"
  fgColor="black"
  bgColor="transparent"
  style={{ width: 28, height: 28 }}
/>
<SocialIcon
  url="https://facebook.com"
  target="_blank"
  rel="noopener noreferrer"
  fgColor="white"
  bgColor="black"
  style={{ width: 24, height: 24 }}
/>
      </div>
    </footer>
  );
}

export default Footer;