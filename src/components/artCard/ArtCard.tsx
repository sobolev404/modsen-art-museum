import { useNavigate } from "react-router-dom";
import ArtTextDesc from "@UI/artTextDesc/ArtTextDesc";
import FavIcon from "@UI/favIcon/FavIcon";
import { useEffect, useState } from "react";
import defStyles from './ArtCard.module.css';

export interface ArtItem {
  id: number;
  title: string;
  image_id: string;
  is_public_domain: boolean;
  artist_title: string;
}

interface ArtCardProps {
  item: ArtItem;
  styles: { [key: string]: string };
  onFavUpdate?: () => void;
}

export default function ArtCard({ item, styles, onFavUpdate }: ArtCardProps) {
  const [isFav, setIsFav] = useState<boolean>(false);
  const navigate = useNavigate();

  function addToFavourite(e: React.MouseEvent) {
    e.stopPropagation();
    const favList = JSON.parse(localStorage.getItem('favList') || '[]');
    const itemIndex = favList.findIndex((favItem: ArtItem) => favItem.id === item.id);

    if (itemIndex !== -1) {
      const updatedFavList = favList.filter((favItem: ArtItem) => favItem.id !== item.id);
      localStorage.setItem('favList', JSON.stringify(updatedFavList));
      setIsFav(false);
      console.log('removed from localStorage');
    } else {
      localStorage.setItem('favList', JSON.stringify([...favList, item]));
      setIsFav(true);
      console.log('added to localStorage');
    }

    if (onFavUpdate) {
      onFavUpdate();
    }
  }

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem('favList') || '[]');
    const isFavourite = favList.some((favItem: ArtItem) => favItem.id === item.id);
    setIsFav(isFavourite);
  }, [item]);

  return (
    <li onClick={() => navigate(`/detail/${item.id}`)} className={`${styles.artCard} ${defStyles.artCardHover}`}>
      <img
        className={styles.artImg}
        src={`https://www.artic.edu/iiif/2/${item.image_id}/full/400,400/0/default.jpg`}
        alt={item.title || "Art image"}
      />
      <div className={styles.descAndFavContainer}>
        <ArtTextDesc
          title={item.title}
          author={item.artist_title}
          privacy={item.is_public_domain}
        />
        <FavIcon isFav={isFav} onClick={addToFavourite} />
      </div>
    </li>
  );
}
