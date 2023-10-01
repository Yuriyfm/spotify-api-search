import React, {FC} from 'react';
import styles from './leftBarStyles.module.scss'
import LeftBarMenu from "@/components/screens/Main/LeftBar/Menu/LeftBarMenu";
import Categories from "@/components/screens/Main/LeftBar/Categories/Categories";
import SelectFilters from "@/components/screens/Main/LeftBar/Filters/SelectFilters";
import {categoryType} from "@/store/categories.slice";
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
import {RootState} from "@/store/store";

const LeftBar: FC = () => {
  const category: categoryType = useAppSelector((state: RootState) => state.categories.category)

  return (
    <div className={styles['left-bar-container']}>
      <div className={styles['menu-container']}>
        <LeftBarMenu/>
      </div>
      <div className={styles['data-container']}>
        <Categories/>
        <div className={styles['filters-container']}>
          {category === 'Artists' &&
            <SelectFilters/>
          }
          {category === 'Playlists' &&
            <SelectFilters/>
          }
          {category === 'Albums' &&
            <SelectFilters/>
          }
          {category === 'Tracks' &&
            <SelectFilters/>
          }
        </div>
      </div>
    </div>
  );
};

export default LeftBar;