import SectionDesc from "../UI/sectionDesc/SectionDesc";
import styles from "./OtherArts.module.css";
import img1 from '../../assets/img/img1.svg'
import favIcon from '../../assets/icons/fav.svg'
import ArtTextDesc from "../UI/artTextDesc/ArtTextDesc";
import FavIcon from "../UI/favIcon/FavIcon";
export default function OtherArts() {
  const imgArray = [
    { img: img1, name: "Charles V, bust length...", author: "Giovanni Britto", privacy: "Public" },
    { img: img1, name: "Charles V, bust length...", author: "Giovanni Britto", privacy: "Public" },
    { img: img1, name: "Charles V, bust length...", author: "Giovanni Britto", privacy: "Public" },
    { img: img1, name: "Charles V, bust length...", author: "Giovanni Britto", privacy: "Public" },
    { img: img1, name: "Charles V, bust length...", author: "Giovanni Britto", privacy: "Public" },
    { img: img1, name: "Charles V, bust length...", author: "Giovanni Britto", privacy: "Public" },
    { img: img1, name: "Charles V, bust length...", author: "Giovanni Britto", privacy: "Public" },
    { img: img1, name: "Charles V, bust length...", author: "Giovanni Britto", privacy: "Public" },
    { img: img1, name: "Charles V, bust length...", author: "Giovanni Britto", privacy: "Public" },
  ];

  return (
    <div className={styles.otherArtsContainer}>
      <SectionDesc
        topText={"Here some more"}
        botText={"Other works for you"}
      ></SectionDesc>
      <ul className={styles.artList}>
        {imgArray.map((item,ind)=><li key={ind} className={styles.artCard}>
            <img className={styles.artImg} src={img1} alt="" />
            <ArtTextDesc></ArtTextDesc>
            <FavIcon></FavIcon>
        </li>)}
      </ul>
    </div>
  );
}
