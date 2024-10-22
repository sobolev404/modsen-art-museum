import styles from './Footer.module.css'
import museumLogo from '../../assets/icons/museum-logo-fot.svg'
import modsenLogo from '../../assets/icons/logo-modsen.svg'

export default function Footer(){
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <img src={museumLogo} alt="museum-logo" />
                <img src={modsenLogo} alt='modsen-logo'></img>
            </div>
        </footer>
    )
}