import styles from './ArtTextDesc.module.css';

interface ArtTextDescProps {
  title: string;
  author: string;
  privacy: boolean;
}

const ArtTextDesc: React.FC<ArtTextDescProps> = ({
  title,
  author,
  privacy,
}) => {
  return (
    <div className={styles.artTextDesc}>
      <span className={styles.artTitle}>{title}</span>
      <span className={styles.artAuthor}>{author}</span>
      <span className={styles.artPrivacy}>
        {privacy ? 'Public' : 'Not Public'}
      </span>
    </div>
  );
};

export default ArtTextDesc;
