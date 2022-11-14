import style from './Home.module.css';
import developer from './Images/developer.svg';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
    return (<>
        <div className={style.firstContainer}>
            <div className={style.typing}>
                <p>Hi, I'm Pablo Albín,</p>
                <p>a Full Stack Developer.</p>
                <p>I'm glad you're here.</p>
            </div>
            <div className={style.developerImg}>
                <img src={developer} alt="developer" />

            </div>
        </div>
        <div className={style.secondContainer}>
            <h2>LET ME INTRODUCE MYSELF</h2>
            <p>
                I am passionate about learning and challenges, both individually and in groups. I consider myself proactive and responsible. Since I was a child I had an interest in technology, therefore, I was always learning all kinds of related things, different languages and/or development technologies in a self-taught way. This is why I decided to turn my life around and dedicate myself fully to what I like and am passionate about, which is this beautiful world of web and software development.
            </p>
        </div>
        <div className={style.contactContainer}>
            <h2>FIND ME ON</h2>
            <p>
                Feel free to contact me
            </p>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/pablo-albin" target="_blank" rel="noreferrer" >
                        <FaLinkedinIn />
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/Pabl088" target="_blank" rel="noreferrer" >
                        <AiFillGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/Pabl088" target="_blank" rel="noreferrer" >
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
    </>);
};

export default Home;
