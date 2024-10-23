import { useContext, useEffect, useState } from "react";
import useFetching from "../../hooks/useFetching";
import ArtService from "../../API/ArtService";
import styles from "./FoundArts.module.css";
import ArtTextDesc from "../UI/artTextDesc/ArtTextDesc";
import FavIcon from "../UI/favIcon/FavIcon";
import { SearchContext } from "../../context/SearchContext";
import Loader from "../UI/loader/Loader";
import useDebounce from "../../hooks/useDebounce";


export default function FoundArts() {
  const [arts, setArts] = useState([]);
  const { query } = useContext(SearchContext);

  const debounceQuery = useDebounce(query,1000)

  const [fetchArts, isArtsLoading, artsError] = useFetching(async () => {
    if (debounceQuery.trim()) {
        const artArray = await ArtService.getBySearchQuery(debounceQuery);
        setArts(artArray);
      }
  });

  useEffect(() => {
    if(debounceQuery.trim()){
        fetchArts();
    }
  }, [debounceQuery]);

  if (!query.trim()) {
    return null;    
  }

  return (
    <div className={styles.artsContainer}>
      {artsError && <h1>Error: {artsError}</h1>}
      {isArtsLoading && !artsError ? (
        <Loader></Loader> 
      ) : (
        <ul className={styles.artList}>
          {arts.map((item) => (
            <li key={item.id} className={styles.artCard}>
              <img
                className={styles.artImg}
                src={`https://www.artic.edu/iiif/2/${item.image_id}/full/80,80/0/default.jpg`}
                alt=""
              />
              <ArtTextDesc
                title={item.title}
                author={item.artist_title}
                privacy={item.is_public_domain}
              ></ArtTextDesc>
              <FavIcon></FavIcon>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
