import style from "./Contact.module.css";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className={style.contactContainer}>
      <h2>FIND ME ON</h2>
      <p>Feel free to contact me</p>
      <ul>
        <li>
          <a href="mailto:pablo.albin88@gmail.com" target="_blank" rel="noreferrer">
            <MdOutlineEmail />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pablo-albin" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/Pabl088" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/Pabl088" target="_blank" rel="noreferrer">
            <AiOutlineTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pablo.albin" target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
