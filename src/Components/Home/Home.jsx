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
            <p>I fell in love with technology since I was a child.</p>
            <p>I am fluent in classics like Java and Javascript.</p>
            <p>My field of interest's are building new web technologies and products, also in areas related to cybersecurity.</p>
            <p style={{ marginBottom: 20 }}>I have a preference for backend development but I enjoy developing in all areas.</p>
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
