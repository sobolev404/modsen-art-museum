import SectionDesc from "@UI/sectionDesc/SectionDesc";
import styles from "./OtherArts.module.css";
import { useEffect, useState } from "react";
import useFetching from "@hooks/useFetching";
import ArtService from "@api/ArtService";
import ArtCard from "@components/artCard/ArtCard";
import Loader from "@UI/loader/Loader";

export default function OtherArts() {
  const [arts, setArts] = useState([]);

  const [fetchArts, isArtsLoading, artsError] = useFetching(async () => {
    const artArray = await ArtService.getOthers();
    setArts(artArray);
  });

  useEffect(() => {
    fetchArts();
  }, []);

  return (
    <div className={styles.otherArtsContainer}>
      <SectionDesc
        topText={"Here some more"}
        botText={"Other works for you"}
      ></SectionDesc>

      <ul className={styles.artList}>
        {artsError && <h1>Error: {artsError}</h1>}

        {isArtsLoading && !artsError ? (
          <Loader></Loader>
        ) : (
          arts.map((item) => (
            <ArtCard key={item.id} item={item} styles={styles}></ArtCard>
          ))
        )}
      </ul>
    </div>
  );
}
