import style from "./TechStack.module.css";
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { SiTypescript, SiReact, SiNestjs, SiJava, SiSpring, SiHibernate, SiPostgresql, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

function Techstack() {
    return (
        <>
            <h2 className={style.titleskill}>Professional skills</h2>
            <div className={style.container}>
                <div className={`${style.techbox} ${style.animation1}`}>
                    <TbBrandHtml5 />
                    <span>HTML5</span>
                </div>
                <div className={`${style.techbox} ${style.animation2}`}>
                    <TbBrandCss3 />
                    <span>CSS3</span>
                </div>
                <div className={`${style.techbox} ${style.animation3}`}>
                    <TbBrandJavascript />
                    <span>Javascript</span>
                </div>
                <div className={`${style.techbox} ${style.animation4}`}>
                    <SiTypescript style={{ fontSize: '70px', marginTop: '12px' }} />
                    <span>TypeScript</span>
                </div>
                <div className={`${style.techbox} ${style.animation5}`}>
                    <SiReact />
                    <span>React.js</span>
                </div>
                <div className={`${style.techbox} ${style.animation6}`}>
                    <DiNodejs />
                    <span>Node.js</span>
                </div>
                <div className={`${style.techbox} ${style.animation7}`}>
                    <SiNestjs />
                    <span>Nest.js</span>
                </div>
                <div className={`${style.techbox} ${style.animation8}`}>
                    <SiJava />
                    <span>Java</span>
                </div>
                <div className={`${style.techbox} ${style.animation9}`}>
                    <SiSpring />
                    <span>Spring</span>
                </div>
                <div className={`${style.techbox} ${style.animation10}`}>
                    <SiHibernate />
                    <span>Hibernate</span>
                </div>
                <div className={`${style.techbox} ${style.animation11}`}>
                    <SiPostgresql />
                    <span>PostgreSQL</span>
                </div>
                <div className={`${style.techbox} ${style.animation12}`}>
                    <SiMongodb />
                    <span>MongoDB</span>
                </div>
            </div>
        </>
    );
};

export default Techstack;
