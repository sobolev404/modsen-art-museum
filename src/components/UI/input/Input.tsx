import styles from './Input.module.css';
import searchIcon from '@assets/icons/search.svg';
import { SearchContext } from '@context/SearchContext';
import { useContext } from 'react';

export default function Input() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('Input must be used within a SearchProvider');
  }

  const { query, setQuery } = context;
  return (
    <div className={styles.inputContainer}>
      <input
        value={query}
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search Art, Artist, Work..."
      />
      <img className={styles.searchBtn} src={searchIcon} alt="Search" />
    </div>
  );
}
