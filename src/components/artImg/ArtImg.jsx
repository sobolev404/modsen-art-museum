import styles from "./ArtImg.module.css";
import img1 from "../../assets/img/img1.svg";
import favIcon from "../../assets/icons/fav.svg";
import FavIcon from "../UI/favIcon/FavIcon";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../UI/loader/Loader";
export default function ArtImg() {
  const [arts, setArts] = useState([]);
  const [isArtsLoading, setIsArtsLoading] = useState(false);

  useEffect(() => {
    async function fetchArts() {
      setIsArtsLoading(true);
      const response = await fetch(
        "https://api.artic.edu/api/v1/artworks?page=1&limit=3&fields=id,title,image_id,is_public_domain,artist_title"
      );
      const data = await response.json();
      const artArray = data.data;
      setArts(artArray);
      setIsArtsLoading(false);
    }
    fetchArts();
  }, []);

  return (
    <div className={styles.artAndPag}>
      <ul className={styles.artContainer}>
        {isArtsLoading ? (
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
      {!isArtsLoading && (
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
