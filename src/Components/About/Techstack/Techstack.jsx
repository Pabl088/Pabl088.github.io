import style from "./Techstack.module.css";
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { SiTypescript, SiReact, SiNestjs, SiJava, SiSpring, SiHibernate, SiPostgresql, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

function Techstack() {
    return (
        <>
            <div className={style.container}>
                <div className={`${style.techbox} ${style.animation1}`}>
                    <TbBrandHtml5 className={style.techicon} />
                    <span>HTML5</span>
                </div>
                <div className={`${style.techbox} ${style.animation2}`}>
                    <TbBrandCss3 className={style.techicon} />
                    <span>CSS3</span>
                </div>
                <div className={`${style.techbox} ${style.animation3}`}>
                    <TbBrandJavascript className={style.techicon} />
                    <span>Javascript</span>
                </div>
                <div className={`${style.techbox} ${style.animation4}`}>
                    <SiTypescript style={{ fontSize: '70px', marginTop: '12px' }} className={style.techicon} />
                    <span>TypeScript</span>
                </div>
                <div className={`${style.techbox} ${style.animation5}`}>
                    <SiReact className={style.techicon} />
                    <span>React.js</span>
                </div>
                <div className={`${style.techbox} ${style.animation6}`}>
                    <DiNodejs className={style.techicon} />
                    <span>Node.js</span>
                </div>
                <div className={`${style.techbox} ${style.animation7}`}>
                    <SiNestjs className={style.techicon} />
                    <span>Nest.js</span>
                </div>
                <div className={`${style.techbox} ${style.animation8}`}>
                    <SiJava className={style.techicon} />
                    <span>Java</span>
                </div>
                <div className={`${style.techbox} ${style.animation9}`}>
                    <SiSpring className={style.techicon} />
                    <span>Spring</span>
                </div>
                <div className={`${style.techbox} ${style.animation10}`}>
                    <SiHibernate className={style.techicon} />
                    <span>Hibernate</span>
                </div>
                <div className={`${style.techbox} ${style.animation11}`}>
                    <SiPostgresql className={style.techicon} />
                    <span>PostgreSQL</span>
                </div>
                <div className={`${style.techbox} ${style.animation12}`}>
                    <SiMongodb className={style.techicon} />
                    <span>MongoDB</span>
                </div>
            </div>
        </>
    );
};

export default Techstack;
