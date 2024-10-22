import styles from './ArtTextDesc.module.css'
export default function ArtTextDesc(){
    return (
        <div className={styles.artTextDesc}>
            <span className={styles.artTitle}>Charles V, bust length...</span>
            <span className={styles.artAuthor}>Giovanni Britto</span>
            <span className={styles.artPrivacy}>Public</span>
          </div>
    )
}