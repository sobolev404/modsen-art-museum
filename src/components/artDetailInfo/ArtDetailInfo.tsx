import { useEffect, useState } from 'react';
import useFetching from '@hooks/useFetching';
import ArtService from '@api/ArtService';
import Loader from '@UI/loader/Loader';
import { useParams } from 'react-router-dom';
import styles from './ArtDetailInfo.module.css';
import FavIcon from '@UI/favIcon/FavIcon';

interface ArtItem {
  id: number;
  image_id: string;
  title: string;
  artist_title: string;
  date_start?: string;
  date_end?: string;
  place_of_origin?: string;
  dimensions?: string;
  credit_line?: string;
  provenance_text?: string;
  is_public_domain?: boolean;
}

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

export default function ArtDetailInfo() {
  const [isFav, setIsFav] = useState<boolean>(false);
  const params = useParams<RouteParams>();
  const [art, setArt] = useState<ArtItem | null>(null);

  const [fetchArtById, isArtLoading, artError] = useFetching(async () => {
    const artId = params.id ? Number(params.id) : 0;
    const artArray = await ArtService.getById(artId);
    const artItem: ArtItem = {
      ...artArray,
      date_start: artArray.date_start?.toString(),
      date_end: artArray.date_end?.toString(),
    };
    setArt(artItem);
  });

  function addToFavourite(e: React.MouseEvent) {
    e.stopPropagation();
    const favList: ArtItem[] = JSON.parse(
      localStorage.getItem('favList') || '[]'
    );
    const itemIndex = favList.findIndex((favItem) => favItem.id === art?.id);

    if (itemIndex !== -1) {
      const updatedFavList = favList.filter(
        (favItem) => favItem.id !== art?.id
      );
      localStorage.setItem('favList', JSON.stringify(updatedFavList));
      setIsFav(false);
      console.log('removed from localStorage');
    } else {
      if (art) {
        localStorage.setItem('favList', JSON.stringify([...favList, art]));
        setIsFav(true);
        console.log('added to localStorage');
      }
    }
  }

  useEffect(() => {
    const favList: ArtItem[] = JSON.parse(
      localStorage.getItem('favList') || '[]'
    );
    const isFavourite = favList.some((favItem) => favItem.id === art?.id);
    setIsFav(isFavourite);
  }, [art]);

  useEffect(() => {
    fetchArtById();
    console.log(params.id);
  }, [params.id]);

  return (
    <div className={styles.artDetailContainer}>
      {artError && typeof artError === 'string' && <h1>Error: {artError}</h1>}
      {isArtLoading && !artError ? (
        <Loader />
      ) : (
        !artError &&
        art && (
          <>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={`https://www.artic.edu/iiif/2/${art.image_id}/full/500,500/0/default.jpg`}
                alt="artImg"
              />
              <div className={styles.favIcon}>
                <FavIcon isFav={isFav} onClick={addToFavourite} />
              </div>
            </div>
            <div className={styles.artDesc}>
              <div className={styles.artDescTop}>
                <span className={styles.artTitle}>{art.title}</span>
                <span className={styles.artAuthor}>{art.artist_title}</span>
                <span className={styles.artDuration}>
                  {art.date_start}-{art.date_end}
                </span>
              </div>
              <div className={styles.artDescBot}>
                <span className={styles.overview}>Overview</span>
                <ul className={styles.overList}>
                  {[
                    ['Artist nationality: ', art.place_of_origin],
                    ['Dimensions Sheet: ', art.dimensions],
                    ['Credit Line: ', art.credit_line],
                    ['Repository: ', art.provenance_text],
                    ['', art.is_public_domain ? 'Public' : 'Not Public'],
                  ].map((item, index) => (
                    <li key={index} className={styles.overItem}>
                      <span className={styles.overItemYellow}>{item[0]}</span>
                      {item[1]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
