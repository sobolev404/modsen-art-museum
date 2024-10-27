import { useNavigate } from "react-router-dom";
import ArtTextDesc from "@UI/artTextDesc/ArtTextDesc";
import FavIcon from "@UI/favIcon/FavIcon";
import { useEffect, useState } from "react";
import defStyles from './ArtCard.module.css'
export default function ArtCard({ item, styles, onFavUpdate }) {
  const [isFav,setIsFav] = useState(false)
  const navigate = useNavigate()

  function addToFavourite(e) {
    e.stopPropagation();
    const favList = JSON.parse(localStorage.getItem('favList')) || [];
    const itemIndex = favList.findIndex(favItem => favItem.id === item.id);
    if (itemIndex !== -1) {
      const updatedFavList = favList.filter(favItem => favItem.id !== item.id);
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
    const favList = JSON.parse(localStorage.getItem('favList')) || [];
    const isFavourite = favList.some(favItem => favItem.id === item.id);
    setIsFav(isFavourite);
  }, [item]);
  

  return (
    <li onClick={()=>navigate(`/detail/${item.id}`)} className={`${styles.artCard} ${defStyles.artCardHover}`}>
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
        ></ArtTextDesc>
        <FavIcon isFav={isFav} onClick={addToFavourite}></FavIcon>
      </div>
    </li>
  );
}
