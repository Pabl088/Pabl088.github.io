import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import style from './Footer.module.css';

function Footer() {

    let year = new Date().getFullYear();

    return (
        <div className={style.container}>
            <span className={style.footerText}>Developed by Pablo Albín</span>
            <span className={style.footerText}>Copyright © {year} P.A.</span>
            <ul>
                <li className="social-icons">
                    <a href="https://www.linkedin.com/in/pablo-albin" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li className="social-icons">
                    <a href="https://www.github.com/Pabl088" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub />
                    </a>
                </li>
                <li className="social-icons">
                    <a href="https://www.twitter.com/Pabl088" target="_blank" rel="noopener noreferrer">
                        <AiOutlineTwitter />
                    </a>
                </li>
                <li className="social-icons">
                    <a href="https://www.instagram.com/pablo.albin" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
