import React, {FC} from 'react';
import {categoryType} from "@/store/categories.slice";
import {RootState} from "@/store/store";
import ArtistsFilters from "@/components/screens/Main/LeftBar/Filters/ArtistsFilters/ArtistsFilters";
import GenresFilters from "@/components/screens/Main/LeftBar/Filters/GenresFilters/GenresFilters";
import styles from './filtersStyles.module.scss'
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
const Filters: FC = () => {
  const category: categoryType = useAppSelector((state: RootState) => state.categories.category)

  return (
    <div className={styles.filtersContainer}>
      {category === 'Artists' &&
        <ArtistsFilters/>
      }
      {category === 'Genres' &&
        <GenresFilters/>
      }
    </div>
  );
};

export default Filters;