import favIcon from '@assets/icons/fav.svg';
import styles from './FavIcon.module.css';

interface FavIconProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void; 
  isFav: boolean;
}

export default function FavIcon({ onClick, isFav }: FavIconProps) {
  return (
    <div onClick={onClick} className={isFav ? styles.favContainerActive : styles.favContainer}>
      <img src={favIcon} alt="" />
    </div>
  );
}
