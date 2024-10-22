import favIcon from '../../../assets/icons/fav.svg'
import styles from './FavIcon.module.css'
export default function FavIcon() {
  return (
    <div className={styles.favContainer}>
      <img src={favIcon} alt="" />
    </div>
  );
}
