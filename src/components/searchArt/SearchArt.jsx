import Input from "../UI/input/Input"
import styles from "./SearchArt.module.css"
export default function SearchArt(){
    return (
        <div className={styles.searchContainer}>
            <h1 className={styles.title}>Let's Find Some <span className={styles.titleSpan}>Art</span> Here!</h1>
            <Input></Input>
        </div>
    )
}