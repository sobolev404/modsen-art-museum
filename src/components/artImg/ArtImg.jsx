import styles from "./ArtImg.module.css";
import img1 from "../../assets/img/img1.svg";
import favIcon from "../../assets/icons/fav.svg";
import FavIcon from "../UI/favIcon/FavIcon";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../UI/loader/Loader";
import ArtService from "../../API/ArtService";
import useFetching from "../../hooks/useFetching";
export default function ArtImg() {
  const [arts, setArts] = useState([]);

  const [fetchArts,isArtsLoading,artsError] = useFetching(async () => {
    const artArray = await ArtService.getAll();
    setArts(artArray);
  });

  useEffect(() => {
    fetchArts()
  }, []);

  return (
    <div className={styles.artAndPag}>
      <ul className={styles.artContainer}>
        {artsError && <h1>Error: {artsError}</h1>}
        {(isArtsLoading && !artsError) ? (
          <Loader></Loader>
        ) : (
          arts.map((art) => (
            <li key={art.id} className={styles.artCard}>
              <img
                className={styles.artImg}
                src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
              ></img>
              <div className={styles.artDesc}>
                <div className={styles.artDescLeft}>
                  <span className={styles.artTitle}>{art.title}</span>
                  <span className={styles.artAuthor}>{art.artist_title}</span>
                  <span className={styles.artPrivacy}>
                    {art.is_public_domain ? "Public" : "Not Public"}
                  </span>
                </div>
                <FavIcon></FavIcon>
              </div>
            </li>
          ))
        )}
      </ul>
      {(!isArtsLoading && !artsError) && (
        <ul className={styles.pagination}>
          <li className={styles.page}>1</li>
          <li className={styles.page}>2</li>
          <li className={styles.page}>3</li>
          <li className={styles.page}>4</li>
        </ul>
      )}
    </div>
  );
}
