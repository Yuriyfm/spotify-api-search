import React, {FC} from 'react';
import SelectCategoryButtons
  from "@/components/screens/Main/LeftBar/Categories/SelectCategoryButtons/SelectCategoryButtons";
import style from './categories.module.scss'
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
const Categories:FC = () => {
  const mode = useAppSelector(state => state.mode.mode);

  return (
    <div className={style.categoriesButtonsContainer}>
      {mode === 'Поиск' &&
        <SelectCategoryButtons/>
      }
    </div>
  );
};

export default Categories;