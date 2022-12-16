import style from './About.module.css';
import Techstack from "./Techstack/Techstack.jsx";

function About() {

    return (
        <div className={style.container}>
            <Techstack />
        </div>
    );
};

export default About;
