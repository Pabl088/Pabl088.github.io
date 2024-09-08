import style from "./Home.module.css";
import developer from "./Images/developer.svg";

function Home() {
  return (
    <div className={style.main}>
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
        <div className={style.card}>
          <h2>LET ME INTRODUCE MYSELF</h2>
          <p>I fell in love with technology since I was a child.</p>
          <p>I am fluent in classics like Java and Javascript.</p>
          <p>My field of interest's are building new web technologies and products, also software development.</p>
          <p style={{ marginBottom: 20 }}>I have a preference for backend development but I enjoy developing in all areas.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
