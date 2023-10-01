import React, {FC, useEffect} from 'react';
import {MultiValue, SingleValue} from 'react-select'
import {useDispatch} from "react-redux";
import {AppDispatch, RootState} from "@/store/store";
import {getGenres, setSelectedGenre} from "@/store/genres.slice";
import {selectOption} from "@/components/commonComponents/SelectStylized";
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
import SelectFilter from "@/components/screens/Main/LeftBar/Filters/SelectFilter/SelectFilter";
import {country, setSelectedCountry} from "@/store/countries.slice";
import TextInput from "@/components/screens/Main/LeftBar/Filters/TextFilter/TextFilter";
import {setSelectedYearOrPeriod} from "@/store/years.slice";
import components from "@/commonStyles/components.module.scss";
import styles from './selectFiltersStyles.module.scss'

const SelectFilters: FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const allGenres: string[] = useAppSelector((state: RootState) => state.genres.allGenres)
  const allCountries: country[] = useAppSelector((state: RootState) => state.countries.allCountries)
  const selectedGenre: string | null = useAppSelector((state: RootState) => state.genres.selectedGenre)
  const selectedCountry: country | null = useAppSelector((state: RootState) => state.countries.selectedCountry)
  const selectedYearOrPeriod: string | null = useAppSelector((state: RootState) => state.years.selectedYearOrPeriod)
  const formattedCountries = allCountries.map(country => ({label: country['rus_name'], value: country['Code']}))
  const formattedGenres = allGenres.map(genre => ({label: genre, value: genre}))

  useEffect(() => {
    !allGenres.length && dispatch(getGenres())
  }, [])

  const selectGenreHandler = (selectedOption: MultiValue<selectOption> | SingleValue<selectOption>,
                              actionMeta: any) => {
    if (selectedOption && 'value' in selectedOption) {
      dispatch(setSelectedGenre(selectedOption));
    } else {
      dispatch(setSelectedGenre(null));
    }
  }

  const selectCountryHandler = (selectedOption: MultiValue<selectOption> | SingleValue<selectOption>,
                                actionMeta: any) => {
    if (selectedOption) {
      dispatch(setSelectedCountry(selectedOption));
    } else {
      dispatch(setSelectedCountry(null));
    }
  }
  const selectYearOrPeriodHandler = (event: any) => {
    dispatch(setSelectedYearOrPeriod(event.target.value));
  }

  return (
    <div>
      <SelectFilter options={formattedGenres} title={'Выберите жанр'} selectedOption={selectedGenre}
                    selectOptionHandler={selectGenreHandler}/>
      <SelectFilter options={formattedCountries} title={'Выберите страну'} selectedOption={selectedCountry}
                    selectOptionHandler={selectCountryHandler}/>
      <TextInput title={'Выберите год или период'} value={selectedYearOrPeriod} onChange={selectYearOrPeriodHandler}
                 placeholder={'напр. 1980 или 1980-1989'}/>
      {/*<div>*/}
      {/*  <label className={components['switch']}>*/}
      {/*    <input type="checkbox"*/}
      {/*           // checked={isChecked}*/}
      {/*           // onChange={onChange}*/}
      {/*    />*/}
      {/*    <span className={components['slider']}></span>*/}
      {/*  </label>*/}
      {/*</div>*/}
      <div className={styles['search-button-container']}>
        <div className={components['action-button']}>
          <span className={components['action-button__text']}>
            Найти
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectFilters;