import { useState, useEffect } from "react";
import styles from "./ArtImg.module.css";
import Loader from "@UI/loader/Loader";
import ArtService from "@api/ArtService";
import useFetching from "@hooks/useFetching";
import ArtCard from "@components/artCard/ArtCard";

interface ArtItem {
  id: number;
  image_id: string;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
}

export default function ArtImg() {
  const [arts, setArts] = useState<ArtItem[]>([]);
  const [page, setPage] = useState<number>(1);

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
          <Loader />
        ) : (
          arts.map((item) => (
            <ArtCard key={item.id} styles={styles} item={item} />
          ))
        )}
      </ul>
      {!isArtsLoading && !artsError && (
        <ul className={styles.pagination}>
          {pages.map((item) => (
            <li
              onClick={() => setPage(item)}
              key={item}
              className={`${styles.page} ${page === item ? styles.pageActive : ''}`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
