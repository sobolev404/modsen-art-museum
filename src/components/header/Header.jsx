import homeIcon from "../../assets/icons/home.svg";
import favIcon from "../../assets/icons/fav.svg";
import logo from "../../assets/icons/museum-logo 2.svg";
import styles from "./Header.module.css";
import Burger from "../UI/burger/Burger";
import { useState } from "react";

export default function Header() {

  const [menuActive,setMenuActive] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" />
        </div>
        <nav>
          <Burger className={`${styles.burger} ${menuActive ? styles.active : ''}`}
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          ></Burger>
          <ul className={`${styles.navigation} ${menuActive ? styles.active : ''}`}>
            <li className={styles.navLink}>
              <img src={homeIcon}></img>
              <a href="#">Home</a>
            </li>
            <li className={styles.navLink}>
              <img src={favIcon}></img>
              <a href="#">Your favourites</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
