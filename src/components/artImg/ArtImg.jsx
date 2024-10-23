import styles from "./ArtImg.module.css";
import FavIcon from "../UI/favIcon/FavIcon";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../UI/loader/Loader";
import ArtService from "../../API/ArtService";
import useFetching from "../../hooks/useFetching";
export default function ArtImg() {
  const [arts, setArts] = useState([]);
  const [page, setPage] = useState(1);

  const pages = [1, 2, 3, 4, 5];

  const [fetchArts, isArtsLoading, artsError] = useFetching(async () => {
    const artArray = await ArtService.getAll(page);
    setArts(artArray);
  });

  useEffect(() => {
    fetchArts();
  }, [page]);

  return (
    <div className={styles.artAndPag}>
      <ul className={styles.artContainer}>
        {artsError && <h1>Error: {artsError}</h1>}
        {isArtsLoading && !artsError ? (
          <Loader></Loader>
        ) : (
          arts.map((art) => (
            <li key={art.id} className={styles.artCard}>
              <img
                className={styles.artImg}
                src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,400/0/default.jpg`}
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
      {!isArtsLoading && !artsError && (
        <ul className={styles.pagination}>
          {pages.map((item) => (
            <li onClick={()=>setPage(item)} key={item} className={`${styles.page} ${page==item ? styles.pageActive : ''}`}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
