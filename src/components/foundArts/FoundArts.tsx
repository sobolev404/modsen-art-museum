import { useContext, useEffect, useState } from 'react';
import useFetching from '@hooks/useFetching';
import ArtService from '@api/ArtService';
import styles from './FoundArts.module.css';
import { SearchContext } from '@context/SearchContext';
import Loader from '@UI/loader/Loader';
import useDebounce from '@hooks/useDebounce';
import ArtCard from '@components/artCard/ArtCard';

interface ArtItem {
  id: number;
  image_id: string;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
}

export default function FoundArts() {
  const [arts, setArts] = useState<ArtItem[]>([]);
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error('FoundArts must be used within a SearchProvider');
  }

  const { query } = searchContext;

  const debounceQuery = useDebounce(query, 1000);

  const sortOptions: [string, keyof ArtItem][] = [
    ['title', 'title'],
    ['author', 'artist_title'],
    ['privacy', 'is_public_domain'],
  ];

  const handleSortOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    sortArts(event.target.value as keyof ArtItem, arts);
  };

  const sortArts = (opt: keyof ArtItem, arr: ArtItem[]) => {
    const sortedArts = [...arr].sort((a, b) => {
      // Проверяем, являются ли оба значения строками
      if (typeof a[opt] === 'string' && typeof b[opt] === 'string') {
        return (a[opt] as string).localeCompare(b[opt] as string);
      }
      // Если это не строки, сравниваем как булевы значения
      if (typeof a[opt] === 'boolean' && typeof b[opt] === 'boolean') {
        return a[opt] === b[opt] ? 0 : (a[opt] ? 1 : 0) - (b[opt] ? 1 : 0);
      }
      // Если одно из значений - число, обрабатываем их
      if (typeof a[opt] === 'number' && typeof b[opt] === 'number') {
        return (a[opt] as number) - (b[opt] as number);
      }
      // Обработка случаев, когда типы различаются или одно из значений - null/undefined
      return (a[opt] ? 1 : 0) - (b[opt] ? 1 : 0);
    });
    setArts(sortedArts);
  };

  const [fetchArts, isArtsLoading, artsError] = useFetching(async () => {
    if (debounceQuery.trim()) {
      const artArray: ArtItem[] =
        await ArtService.getBySearchQuery(debounceQuery);
      setArts(artArray);
    }
  });

  useEffect(() => {
    if (debounceQuery.trim()) {
      fetchArts();
    }
  }, [debounceQuery]);

  if (!query.trim()) {
    return null;
  }

  return (
    <div className={styles.artsContainer}>
      {artsError && <h1>Error: {artsError}</h1>}

      {isArtsLoading && !artsError ? (
        <Loader />
      ) : (
        <>
          {arts.length === 0 && query && !isArtsLoading && (
            <h2>No results found for your query.</h2>
          )}
          {arts.length !== 0 && (
            <div className={styles.sortContainer}>
              <select
                className={styles.sortSelect}
                defaultValue=""
                onChange={handleSortOption}
              >
                <option className={styles.sortOption} disabled value="">
                  Sort by:
                </option>
                {sortOptions.map((item) => (
                  <option
                    className={styles.sortOption}
                    key={item[1]}
                    value={item[1]}
                  >
                    {item[0]}
                  </option>
                ))}
              </select>
            </div>
          )}
          <ul className={styles.artList}>
            {arts.map((item) => (
              <ArtCard key={item.id} styles={styles} item={item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
