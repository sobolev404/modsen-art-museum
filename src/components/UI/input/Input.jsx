import styles from './Input.module.css'
import searchIcon from '@assets/icons/search.svg'
import { SearchContext } from '@context/SearchContext';
import { useContext } from 'react';
export default function Input(){
    const { query, setQuery } = useContext(SearchContext); // Достаем состояние и функцию для изменения
    
    return (
        <div className={styles.inputContainer}>
            <input value={query} className={styles.input} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Search Art, Artist, Work..."></input>
            <img className={styles.searchBtn} src={searchIcon}></img>
        </div>
    )
}