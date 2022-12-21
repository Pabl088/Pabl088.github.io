import style from './About.module.css';
import TechStack from './TechStack/TechStack.jsx';
import ToolStack from './ToolStack/ToolStack.jsx';

function About() {

    return (
        <div className={style.container}>
            <div className={style.text}>
                <h2>Know who I'm</h2>
                <p>I am passionate about learning and challenges, both individually and in groups. I consider myself proactive and responsible. Since I was a child I had an interest in technology, therefore, I was always learning all kinds of related things, different languages and/or development technologies in a self-taught way. This is why I decided to turn my life around and dedicate myself fully to what I like and am passionate about, which is this beautiful world of web and software development.</p>
            </div>
            <TechStack />
            <ToolStack className={style.tools} />
        </div>
    );
};

export default About;
