import ArtImg from "../artImg/ArtImg"
import Input from "../UI/input/Input"
import styles from "./SearchArt.module.css"
export default function SearchArt(){
    return (
        <div className={styles.searchContainer}>
            <h1 className={styles.title}>Let's Find Some <span className={styles.titleSpan}>Art</span> Here!</h1>
            <Input></Input>
            <h3 className={styles.descTop}>Topics for you</h3>
            <h3 className={styles.descBot}>Our special gallery</h3>
            <ArtImg></ArtImg>
        </div>
    )
}