import styles from './Input.module.css'
import searchIcon from '../../../assets/icons/search.svg'
export default function Input(){
    return (
        <div className={styles.inputContainer}>
            <input className={styles.input} type="text" placeholder="Search Art, Artist, Work..."></input>
            <img className={styles.searchBtn} src={searchIcon}></img>
        </div>
    )
}