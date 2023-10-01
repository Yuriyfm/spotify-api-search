import React, {FC} from 'react';
import {RootState} from "@/store/store";
import styles from './allGenresStyle.module.scss'
import components from '@/commonStyles/components.module.scss'
import {useAppDispatch, useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
import {GenresState, setSelectedGenre} from "@/store/genres.slice";
import {getPlaylistsByGenre} from "@/store/playlists.slice";

const AllGenres: FC = () => {
  const dispatch = useAppDispatch()
  const genresState: GenresState = useAppSelector((state: RootState) => state.genres)
  const {allGenres, selectedGenre} = genresState

  const selectGenreHandler = (genre: string) => {
    dispatch(setSelectedGenre(genre))
    dispatch(getPlaylistsByGenre())
  }

  return (
    <div className={styles['all-genres-container']}>
      {allGenres.map((genre: string) => (
        <span key={genre} className={selectedGenre !== genre ? components['tag-item']: components['tag-item_selected']}
              onClick={() => selectGenreHandler(genre)}>{genre}</span>
      ))}
    </div>
  );
};

export default AllGenres;