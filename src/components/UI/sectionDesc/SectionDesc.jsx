import styles from './SectionDesc.module.css'
export default function SectionDesc({topText,botText}){
    return (
        <>
        <h3 className={styles.descTop}>{topText}</h3>
        <h3 className={styles.descBot}>{botText}</h3>
        </>
    )
}