import styles from './Footer.module.css'
import museumLogo from '../../assets/icons/museum-logo-fot.svg'
import modsenLogo from '../../assets/icons/logo-modsen.svg'
import { Link } from 'react-router-dom'

export default function Footer(){
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <Link to={'/'}><img src={museumLogo} alt="museum-logo" /></Link>
                <Link target='blank' to={'https://www.modsen-software.com/'}><img src={modsenLogo} alt='modsen-logo'></img></Link>
            </div>
        </footer>
    )
}