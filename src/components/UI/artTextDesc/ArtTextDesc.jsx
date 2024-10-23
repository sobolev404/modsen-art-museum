import styles from './ArtTextDesc.module.css'
export default function ArtTextDesc({title,author,privacy}){
    return (
        <div className={styles.artTextDesc}>
            <span className={styles.artTitle}>{title}</span>
            <span className={styles.artAuthor}>{author}</span>
            <span className={styles.artPrivacy}>{privacy ? "Public" : "Not Public"}</span>
          </div>
    )
}