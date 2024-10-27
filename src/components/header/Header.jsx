import homeIcon from "@assets/icons/home.svg";
import favIcon from "@assets/icons/fav.svg";
import logo from "@assets/icons/museum-logo 2.svg";
import styles from "./Header.module.css";
import Burger from "@UI/burger/Burger";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuActive(false);
        document.body.classList.remove("_lock");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to={"/"}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="" />
          </div>
        </Link>

        <nav ref={navRef}>
          <Burger
            className={`${styles.burger} ${menuActive ? styles.active : ""}`}
            onClick={() => {
              setMenuActive(!menuActive);
              document.body.classList.toggle("_lock");
            }}
          ></Burger>
          <ul
            className={`${styles.navigation} ${
              menuActive ? styles.active : ""
            }`}
          >
            <Link className={styles.link} to={"/"}>
              <li className={styles.navLink}>
                <img src={homeIcon}></img>
                <span to={"/"}>Home</span>
              </li>
            </Link>

            <Link className={styles.link} to={"/favourites"}>
              <li className={styles.navLink}>
                <img src={favIcon}></img>
                <span className={styles.linkText}>Your favourites</span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
