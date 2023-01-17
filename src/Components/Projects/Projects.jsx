import style from './Projects.module.css';
import SocialSound from './Images/SocialSound.png';
import DataSystem from './Images/datasystem.gif';
import FruitApp from './Images/fruitapp.gif';
import WikiPoke from './Images/WikiPoke.png';
import Portfolio from './Images/Portfolio.png';
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

function Projects() {
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h2>My Recent Works</h2>
                <h4>Here are a few projects I've worked on recently.</h4>
            </div>
            <div className={style.projects}>
                <div className={style.projectbox}>
                    <img src={SocialSound} alt="SocialSound" />
                    <div className={style.projectext}>
                        <h3>SocialSound</h3>
                        <p>Final group project done for Henry's bootcamp. It is a social network aimed at amateur musicians who want to spread their art and at the same time connect and learn about the work of colleagues.
                            <br />
                            <br />
                            Technologies used: Javascript - CSS - React.js - Redux - Material UI - Firebase - Nodemailer - Stripe - Bcrypt - PostgreSQL</p>
                        <div className={style.buttons}>
                            <Button variant="primary" href='https://github.com/Pabl088/SocialSound/' target="_blank">
                                <BsGithub /> &nbsp;
                                GitHub
                            </Button>
                            <Button variant="primary" href='https://www.socialsound.art/' target="_blank">
                                <CgWebsite /> &nbsp;
                                Demo
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={style.projectbox}>
                    <img src={WikiPoke} alt="WikiPoke" />
                    <div className={style.projectext}>
                        <h3>WikiPoke</h3>
                        <p>Individual project done for Henry's bootcamp. <br />
                            It is a small SPA (single page application) to consult the data of all existing pokemons with the possibility of creating your own pokemons.
                            <br />
                            <br />
                            Technologies used: Javascript - CSS - React.js - Node.js - Express - PostgreSQL</p>
                        <div className={style.buttons}>
                            <Button variant="primary" href='https://github.com/Pabl088/WikiPoke' target="_blank">
                                <BsGithub /> &nbsp;
                                GitHub
                            </Button>
                            <Button variant="primary" href='https://wikipoke.vercel.app/' target="_blank">
                                <CgWebsite /> &nbsp;
                                Demo
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={style.projectbox}>
                    <img src={DataSystem} alt="DataSystem" />
                    <div className={style.projectext}>
                        <h3>DataSystem</h3>
                        <p>Desktop application for the management of business information, oriented to the sector of repair and maintenance of computer equipment.
                            <br />
                            <br />
                            Developed in Java with database connection and data export to PDF document.</p>
                        <div className={style.buttons} style={{ justifyContent: 'center' }}>
                            <Button variant="primary" href='https://github.com/Pabl088/DataSystem' target="_blank">
                                <BsGithub /> &nbsp;
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={style.projectbox}>
                    <img src={FruitApp} alt="FruitApp" />
                    <div className={style.projectext}>
                        <h3>FruitApp</h3>
                        <p>Didactic game for android with arithmetic operations and different levels.
                            Stores the highest score achieved and displays it on the main screen along with the user's name.
                            <br />
                            <br />
                            Developed in Java with gradle. </p>
                        <div className={style.buttons}>
                            <Button variant="primary" href='https://github.com/Pabl088/FruitApp' target="_blank">
                                <BsGithub /> &nbsp;
                                GitHub
                            </Button>
                            <Button variant="primary" href='https://www.socialsound.art/' target="_blank">
                                <AiOutlineDownload /> &nbsp;
                                APK
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={`${style.projectbox} ${style.spacebottom}`}>
                    <img src={Portfolio} alt="Portfolio" />
                    <div className={style.projectext}>
                        <h3>Portfolio</h3>
                        <p>This website. I hope you like it and you can get to know me a little. I will update it with more information and new projects, so do not hesitate to come back.
                            <br />
                            <br />
                            Technologies used: Javascript - CSS - React.js - React Icons - React Bootstrap</p>
                        <div className={style.buttons} style={{ justifyContent: 'center' }}>
                            <Button variant="primary" href='https://github.com/Pabl088/Portfolio' target="_blank">
                                <BsGithub /> &nbsp;
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
