import style from './Projects.module.css';

function Projects() {
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h2>My Recent Works</h2>
                <h4>Here are a few projects I've worked on recently.</h4>
            </div>
            <div className={style.projects}>
                <div className={style.box}>
                    <h3>SocialSound</h3>
                    <p>lalalalla</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
