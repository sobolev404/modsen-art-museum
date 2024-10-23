import ArtImg from "../artImg/ArtImg";
import SectionDesc from "../UI/sectionDesc/SectionDesc";
import styles from './PaginationArts.module.css'
export default function PaginationArts(){
    return (
        <div className={styles.paginationArtsContainer}>
          <SectionDesc topText={'Topics for you'} botText={'Our special gallery'}></SectionDesc>
          <ArtImg></ArtImg>
        </div>
    )
}