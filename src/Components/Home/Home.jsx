import style from './Home.module.css';
import developer from './Images/developer.gif';

function Home() {
    return (
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
    );
};

export default Home;
