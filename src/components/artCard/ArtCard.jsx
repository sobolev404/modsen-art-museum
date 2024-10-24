import { useNavigate } from "react-router-dom";
import ArtTextDesc from "../UI/artTextDesc/ArtTextDesc";
import FavIcon from "../UI/favIcon/FavIcon";

export default function ArtCard({ item, styles }) {

  const navigate = useNavigate()

  return (
    <li onClick={()=>navigate(`/detail/${item.id}`)} className={styles.artCard}>
      <img
        className={styles.artImg}
        src={`https://www.artic.edu/iiif/2/${item.image_id}/full/400,400/0/default.jpg`}
        alt={item.title || "Art image"}
      />
      <div className={styles.descAndFavContainer}>
        <ArtTextDesc
          title={item.title}
          author={item.artist_title}
          privacy={item.is_public_domain}
        ></ArtTextDesc>
        <FavIcon></FavIcon>
      </div>
    </li>
  );
}
