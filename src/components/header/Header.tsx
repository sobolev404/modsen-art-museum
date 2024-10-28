import homeIcon from '../../assets/icons/home.svg';
import favIcon from '../../assets/icons/fav.svg';
import logo from '../../assets/icons/museum-logo 2.svg';
import styles from './Header.module.css';
import Burger from '../UI/burger/Burger';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const navRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuActive(false);
        document.body.classList.remove('_lock');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to={'/'}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Museum Logo" />
          </div>
        </Link>

        <nav ref={navRef}>
          <Burger
            className={`${styles.burger} ${menuActive ? styles.active : ''}`}
            onClick={() => {
              setMenuActive((prev) => !prev);
              document.body.classList.toggle('_lock');
            }}
          />
          <ul
            className={`${styles.navigation} ${
              menuActive ? styles.active : ''
            }`}
          >
            <Link className={styles.link} to={'/'}>
              <li className={styles.navLink}>
                <img src={homeIcon} alt="Home" />
                <span>Home</span>
              </li>
            </Link>

            <Link className={styles.link} to={'/favourites'}>
              <li className={styles.navLink}>
                <img src={favIcon} alt="Your Favourites" />
                <span className={styles.linkText}>Your favourites</span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
