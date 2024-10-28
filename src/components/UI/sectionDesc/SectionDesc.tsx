import styles from './SectionDesc.module.css';

interface SectionDescProps {
  topText: string;
  botText: string;
}

export default function SectionDesc({ topText, botText }: SectionDescProps) {
  return (
    <>
      <h3 className={styles.descTop}>{topText}</h3>
      <h3 className={styles.descBot}>{botText}</h3>
    </>
  );
}
