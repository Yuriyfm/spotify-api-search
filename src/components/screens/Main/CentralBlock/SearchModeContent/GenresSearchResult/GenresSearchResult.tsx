import React, {FC} from 'react';
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
import typography from '@/commonStyles/typography.module.scss'
import {RootState} from "@/store/store";
import Link from 'next/link';
import styles from './genresSearchResult.module.scss'
const GenresSearchResult: FC = () => {
  const playlistsByGenre = useAppSelector(state => state.playlists.byGenres)
  const selectedGenre = useAppSelector((state: RootState) => state.genres.selectedGenre)

  return (
    <div>
      <h2 className={typography['title-h1']}>{`Результаты поиска плейлистов по жанру ${selectedGenre}`}</h2>
      <div className={styles.playlistsByGenresContainer}>
        {playlistsByGenre.map((playlist: any) => (
          <Link className={typography['custom-link']}  target="_blank"
                key={playlist.href} href={playlist.external_urls.spotify} passHref>
            {playlist.description}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenresSearchResult;