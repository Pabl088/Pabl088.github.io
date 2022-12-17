import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import logo from './Images/logo.png';

function NavBar() {
    return (<header>
        <nav>
            <div className={style.container}>
                <div className={style.icon}>
                    <Link to={'/'}><img src={logo} alt='P.A.' /></Link>
                </div>
                <div className={style.items}>
                    <ul>
                        <li>
                            <Link to={'/'}><span className={style.link}>Home</span></Link>
                        </li>
                        <li >
                            <Link to={'/about'}><span className={style.link}>About</span></Link>
                        </li>
                        <li>
                            <Link to={'/projects'}><span className={style.link}>Projects</span></Link>
                        </li>
                        <li >
                            <Link to={'/resume'}><span className={style.link}>Resume</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>);
};

export default NavBar;
