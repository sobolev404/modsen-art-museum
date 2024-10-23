import SectionDesc from "../UI/sectionDesc/SectionDesc";
import styles from "./OtherArts.module.css";
import ArtTextDesc from "../UI/artTextDesc/ArtTextDesc";
import FavIcon from "../UI/favIcon/FavIcon";
import { useEffect, useState } from "react";
import useFetching from "../../hooks/useFetching";
import ArtService from "../../API/ArtService";

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
    </div>
  );
}
