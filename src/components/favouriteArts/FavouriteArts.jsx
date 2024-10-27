import styles from "./FavouriteArts.module.css";
import iconTitle from "@assets/icons/iconTitle.svg";
import SectionDesc from "@UI/sectionDesc/SectionDesc";
import ArtCard from "@components/artCard/ArtCard";
import { useEffect, useState } from "react";
export default function FavouriteArts() {

  const [favArray,setFavArray]=useState([])

  const updateFavArray = () => {
    setFavArray(JSON.parse(localStorage.getItem("favList")) || []);
  };

  useEffect(() => {
    // Инициализация избранных элементов при монтировании компонента
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
      <SectionDesc topText={'Saved by you'} botText={'Your favorites list'}></SectionDesc>
      <ul className={styles.favList}>
        {favArray.length!==0 ? favArray.map((item)=><ArtCard onFavUpdate={updateFavArray} key={item.id} item={item} styles={styles}></ArtCard>): <span className={styles.emptyFav}>Your favorites list is currently empty.</span>}
      </ul>
    </div>
  );
}
