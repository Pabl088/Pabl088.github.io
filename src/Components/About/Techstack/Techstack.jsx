import style from "./Techstack.module.css";
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { SiTypescript, SiReact, SiNestjs, SiJava, SiSpring, SiHibernate, SiPostgresql, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

function Techstack() {
    return (
        <>
            <div className={style.container}>
                <div className={style.techbox}>
                    <TbBrandHtml5 className={style.techicon} />
                    <span>HTML5</span>
                </div>
                <div className={style.techbox}>
                    <TbBrandCss3 className={style.techicon} />
                    <span>CSS3</span>
                </div>
                <div className={style.techbox}>
                    <TbBrandJavascript className={style.techicon} />
                    <span>Javascript</span>
                </div>
                <div className={style.techbox}>
                    <SiTypescript style={{ fontSize: '70px', marginTop: '12px' }} className={style.techicon} />
                    <span>TypeScript</span>
                </div>
                <div className={style.techbox}>
                    <SiReact className={style.techicon} />
                    <span>React.js</span>
                </div>
                <div className={style.techbox}>
                    <DiNodejs className={style.techicon} />
                    <span>Node.js</span>
                </div>
                <div className={style.techbox}>
                    <SiNestjs className={style.techicon} />
                    <span>Nest.js</span>
                </div>
                <div className={style.techbox}>
                    <SiJava className={style.techicon} />
                    <span>Java</span>
                </div>
                <div className={style.techbox}>
                    <SiSpring className={style.techicon} />
                    <span>Spring</span>
                </div>
                <div className={style.techbox}>
                    <SiHibernate className={style.techicon} />
                    <span>Hibernate</span>
                </div>
                <div className={style.techbox}>
                    <SiPostgresql className={style.techicon} />
                    <span>PostgreSQL</span>
                </div>
                <div className={style.techbox}>
                    <SiMongodb className={style.techicon} />
                    <span>MongoDB</span>
                </div>
            </div>
        </>
    );
};

export default Techstack;
