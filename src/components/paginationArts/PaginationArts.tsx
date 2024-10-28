import ArtImg from '@components/artImg/ArtImg';
import SectionDesc from '@UI/sectionDesc/SectionDesc';
import styles from './PaginationArts.module.css';

const PaginationArts: React.FC = () => {
  return (
    <div className={styles.paginationArtsContainer}>
      <SectionDesc topText={'Topics for you'} botText={'Our special gallery'} />
      <ArtImg />
    </div>
  );
};

export default PaginationArts;
