import styles from './FavouriteArts.module.css';
import iconTitle from '@assets/icons/iconTitle.svg';
import SectionDesc from '@UI/sectionDesc/SectionDesc';
import ArtCard from '@components/artCard/ArtCard';
import { useEffect, useState } from 'react';

interface ArtItem {
  id: number;
  image_id: string;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
}

export default function FavouriteArts() {
  const [favArray, setFavArray] = useState<ArtItem[]>([]);

  const updateFavArray = () => {
    const storedFavList = localStorage.getItem('favList');
    setFavArray(storedFavList ? JSON.parse(storedFavList) : []);
  };

  useEffect(() => {
    updateFavArray();
  }, []);

  return (
    <div className={styles.favSection}>
      <div className={styles.title}>
        <h1 className={styles.titleTop}>Here Are Your</h1>
        <div className={styles.titleBot}>
          <img src={iconTitle} alt="iconTitle" />
          <span className={styles.titleBotOrange}>Favourites</span>
        </div>
      </div>
      <SectionDesc topText={'Saved by you'} botText={'Your favorites list'} />
      <ul className={styles.favList}>
        {favArray.length !== 0 ? (
          favArray.map((item) => (
            <ArtCard
              key={item.id}
              item={item}
              styles={styles}
              onFavUpdate={updateFavArray}
            />
          ))
        ) : (
          <span className={styles.emptyFav}>
            Your favorites list is currently empty.
          </span>
        )}
      </ul>
    </div>
  );
}
