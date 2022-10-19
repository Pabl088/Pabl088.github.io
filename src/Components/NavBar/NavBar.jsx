import style from './NavBar.module.css';

function NavBar() {
    return (<>
        <nav>
            <div className={style.container}>
                <a href="#">Navbar</a>
                <div className={style.items}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li >
                            <a href="#">Features</a>
                        </li>
                        <li >
                            <a href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
};

export default NavBar;