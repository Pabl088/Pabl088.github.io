import style from "./NavBar.module.css";
import { Link as ScrollLink } from "react-scroll";
import logo from "./Images/logo.png";

function NavBar() {
  return (
    <header>
      <nav>
        <div className={style.container}>
          <div className={style.icon}>
            <ScrollLink to={"home"} smooth={true} duration={1000}>
              <img src={logo} alt="P.A." />
            </ScrollLink>
          </div>
          <div className={style.items}>
            <ul>
              <li>
                <ScrollLink to={"home"} smooth={true} duration={1000}>
                  <span className={style.link}>Home</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to={"projects"} smooth={true} duration={1000}>
                  <span className={style.link}>Projects</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to={"skills"} smooth={true} duration={1000}>
                  <span className={style.link}>Skills</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to={"resume"} smooth={true} duration={1000}>
                  <span className={style.link}>Resume</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to={"contact"} smooth={true} duration={1000}>
                  <span className={style.link}>Contact</span>
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
