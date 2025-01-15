import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = ()  => {
    return (
        <nav className={styles.nav}>
            <span className='fa-solid fa-bars'></span>
            <div>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/favorite">Favorite</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
            </div> 
        </nav>
    );
};

export default NavBar;