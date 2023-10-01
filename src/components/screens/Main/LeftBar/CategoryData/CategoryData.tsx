import React, {FC} from 'react';
import {categoryType} from "@/store/categories.slice";
import {RootState} from "@/store/store";
import AllGenres from "@/components/screens/Main/LeftBar/CategoryData/AllGenres/AllGenres";
import styles from './categoryData.module.scss'
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
const CategoryData: FC = () => {
  const category: categoryType = useAppSelector((state: RootState) => state.categories.category)


  return (
    <div className={styles['category-data-container']}>
      {category === 'Artists' &&
      <AllGenres/>
      }
    </div>
  );
};

export default CategoryData;