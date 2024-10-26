import { useContext, useEffect, useState } from "react";
import useFetching from "../../hooks/useFetching";
import ArtService from "../../API/ArtService";
import styles from "./FoundArts.module.css";
import { SearchContext } from "../../context/SearchContext";
import Loader from "../UI/loader/Loader";
import useDebounce from "../../hooks/useDebounce";
import ArtCard from "../artCard/ArtCard";

export default function FoundArts() {
  const [arts, setArts] = useState([]);
  const { query } = useContext(SearchContext);

  const debounceQuery = useDebounce(query, 1000);

  const sortOptions = [['title',"title"], ['author',"artist_title"],['privacy','is_public_domain']];

  function handleSortOption(event) {
    sortArts(event.target.value,arts);
  }

  function sortArts(opt, arr) {
    setArts(
      [...arr].sort((a, b) => {
        if (typeof a[opt] === "string") {
          return a[opt].localeCompare(b[opt]);
        }
        return a[opt] - b[opt];
      })
    );
  }

  const [fetchArts, isArtsLoading, artsError] = useFetching(async () => {
    if (debounceQuery.trim()) {
      const artArray = await ArtService.getBySearchQuery(debounceQuery);
      setArts(artArray);
    }
  });

  useEffect(() => {
    if (debounceQuery.trim()) {
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
        <>
          {arts.length === 0 && query && !isArtsLoading && (
            <h2>No results found for your query.</h2>
          )}
          <div className={styles.sortContainer}>
            <select className={styles.sortSelect} defaultValue='' onChange={handleSortOption}>
              <option className={styles.sortOption} disabled value=''>Sort by:</option>
              {sortOptions.map((item) => (
                <option className={styles.sortOption} key={item[1]} value={item[1]}>
                  {item[0]}
                </option>
              ))}
            </select>
          </div>
          <ul className={styles.artList}>
            {arts.map((item) => (
              <ArtCard key={item.id} styles={styles} item={item}></ArtCard>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
