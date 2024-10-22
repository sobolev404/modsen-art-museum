import homeIcon from "../../assets/icons/home.svg";
import favIcon from "../../assets/icons/fav.svg";
import logoTop from "../../assets/icons/logo-top.svg"
import logoMid from "../../assets/icons/logo-mid.svg"
import logoBot from "../../assets/icons/logo-bot.svg"
import  classes from './Header.module.css'

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__logo}>
            <div className={classes.header__logo_icon}>
                <img src={logoTop} alt="" />
                <div className={classes.logo_icon_mid}>
                    <img src={logoMid} alt="" />
                    <img src={logoMid} alt="" />
                    <img src={logoMid} alt="" />
                    <img src={logoMid} alt="" />
                </div>
                <img src={logoBot} alt="" />
            </div>
            <span className="header__logo-span">Museum of Art</span>
        </div>
        <nav className="header__nav">
          <ul className={classes.header__nav_list}>
            <li className="header__nav-item">
              <img src={homeIcon}></img>
              <a className="header__nav-link" href="#">
                Home
              </a>
            </li>
            <li className="header__nav-item">
              <img src={favIcon}></img>
              <a className="header__nav-link" href="#">
                Your favourites
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
