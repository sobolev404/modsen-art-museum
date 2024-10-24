import { useEffect, useState } from "react";
import useFetching from "../../hooks/useFetching";
import ArtService from "../../API/ArtService";
import Loader from "../UI/loader/Loader";
import { useParams } from "react-router-dom";
import styles from "./ArtDetailInfo.module.css";
import FavIcon from "../UI/favIcon/FavIcon";

export default function ArtDetailInfo() {
  const [isFav,setIsFav] = useState(false)
  const params = useParams();
  const [art, setArt] = useState({});

  const [fetchArtById, isArtLoading, artError] = useFetching(async () => {
    const artArray = await ArtService.getById(params.id);
    setArt(artArray);
  });

  function addToFavourite(e) {
    e.stopPropagation();
    const favList = JSON.parse(localStorage.getItem('favList')) || [];
    const itemIndex = favList.findIndex(favItem => favItem.id === art.id);
    if (itemIndex !== -1) {
      const updatedFavList = favList.filter(favItem => favItem.id !== art.id);
      localStorage.setItem('favList', JSON.stringify(updatedFavList));
      setIsFav(false);
      console.log('removed from localStorage');
    } else {
      localStorage.setItem('favList', JSON.stringify([...favList, art]));
      setIsFav(true);
      console.log('added to localStorage');
    }

  }

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem('favList')) || [];
    const isFavourite = favList.some(favItem => favItem.id === art.id);
    setIsFav(isFavourite);
  }, [art]);

  useEffect(() => {
    fetchArtById();
    console.log(params.id);
  }, []);

  return (
    <div className={styles.artDetailContainer}>
      {artError && <h1>Error: {artError}</h1>}

      {isArtLoading && !artError ? (
        <Loader />
      ) : (
        !artError && (
          <>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={`https://www.artic.edu/iiif/2/${art.image_id}/full/500,500/0/default.jpg`}
                alt="artImg"
              />
              <div className={styles.favIcon}>
                <FavIcon isFav={isFav} onClick={addToFavourite}/>
              </div>
            </div>
            <div className={styles.artDesc}>
              <div className={styles.artDescTop}>
                <span className={styles.artTitle}>{art.title}</span>
                <span className={styles.artAuthor}>{art.artist_title}</span>
                <span className={styles.artDuration}>
                  {art.date_start}-{art.date_end}
                </span>
              </div>
              <div className={styles.artDescBot}>
                <span className={styles.overview}>Overview</span>
                <ul className={styles.overList}>
                  {[
                    ["Artist nationality: ", art.place_of_origin],
                    ["Dimensions Sheet: ", art.dimensions],
                    ["Credit Line: ", art.credit_line],
                    ["Repository: ", art.provenance_text],
                    ["", art.is_public_domain ? "Public" : "Not Public"],
                  ].map((item) => (
                    <li key={item[0]} className={styles.overItem}>
                      <span className={styles.overItemYellow}>{item[0]}</span>
                      {item[1]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
