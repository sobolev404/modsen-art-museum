import styles from "./ArtImg.module.css";
import img1 from "../../assets/img/img1.svg";
import favIcon from "../../assets/icons/fav.svg";
export default function ArtImg() {
  return (
    <div className={styles.artAndPag}>
    <ul className={styles.artContainer}>
      <li className={styles.artCard}>
        <img className={styles.artImg} src={img1}></img>
        <div className={styles.artDesc}>
          <div className={styles.artDescLeft}>
            <span className={styles.artTitle}>Charles V, bust length...</span>
            <span className={styles.artAuthor}>Giovanni Britto</span>
            <span className={styles.artPrivacy}>Public</span>
          </div>
          <div className={styles.favContainer}>
            <img src={favIcon} alt="" />
          </div>
        </div>
      </li>
      <li className={styles.artCard}>
        <img className={styles.artImg} src={img1}></img>
        <div className={styles.artDesc}>
          <div className={styles.artDescLeft}>
            <span className={styles.artTitle}>Charles V, bust length...</span>
            <span className={styles.artAuthor}>Giovanni Britto</span>
            <span className={styles.artPrivacy}>Public</span>
          </div>
          <div className={styles.favContainer}>
            <img src={favIcon} alt="" />
          </div>
        </div>
      </li>
      <li className={styles.artCard}>
        <img className={styles.artImg} src={img1}></img>
        <div className={styles.artDesc}>
          <div className={styles.artDescLeft}>
            <span className={styles.artTitle}>Charles V, bust length...</span>
            <span className={styles.artAuthor}>Giovanni Britto</span>
            <span className={styles.artPrivacy}>Public</span>
          </div>
          <div className={styles.favContainer}>
            <img src={favIcon} alt="" />
          </div>
        </div>
      </li>
    </ul>
    <ul className={styles.pagination}>
        <li className={styles.page}>1</li>
        <li className={styles.page}>2</li>
        <li className={styles.page}>3</li>
        <li className={styles.page}>4</li>

    </ul>
    </div>
    
  );
}
