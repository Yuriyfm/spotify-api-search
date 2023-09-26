import React, {FC, useEffect} from 'react';
import typography from "@/commonStyles/typography.module.scss";
import {MultiValue, SingleValue} from 'react-select'
import {useDispatch} from "react-redux";
import {AppDispatch, RootState} from "@/store/store";
import {getGenres, setSelectedGenre} from "@/store/genres.slice";
import SelectStylized, {selectOption} from "@/components/commonComponents/SelectStylized";
import {getPlaylistsByGenre} from "@/store/playlists.slice";
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";


const GenresFilters: FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const allGenres: string[] = useAppSelector((state: RootState) => state.genres.allGenres)
  const selectedGenre: string | null = useAppSelector((state: RootState) => state.genres.selectedGenre)


  useEffect(() => {
    !allGenres.length && dispatch(getGenres())
  }, [])

  const selectGenreHandler = (selectedOption: MultiValue<selectOption> | SingleValue<selectOption>,
                              actionMeta: any) => {
    if (selectedOption && 'value' in selectedOption) {
      dispatch(setSelectedGenre(selectedOption.value));
      dispatch(getPlaylistsByGenre())
    } else {
      dispatch(setSelectedGenre(null));
    }
  }

  return (
    <div className={typography.paragraph}>
      <p>Выберите жанр и посмотрите содержание самого популярного плейлиста на Spotify</p>
      <SelectStylized options={allGenres} selectedOption={selectedGenre}
                      selectOptionHandler={selectGenreHandler}/>
    </div>
  );
};

export default GenresFilters;