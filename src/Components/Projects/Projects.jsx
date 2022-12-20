import style from './Projects.module.css';
import SocialSound from './Images/SocialSound.png';
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

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
            </div>
        </div>
    );
};

export default Projects;
