import React, {FC} from 'react';
import components from '@/commonStyles/components.module.scss'
import styles from './selectCategoryButtonsStyles.module.scss'
import {RootState} from "@/store/store";
import {categoryType, setCategory} from "@/store/categories.slice";
import {useAppDispatch, useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
import CloseIcon from "@/components/Icons/CloseIcon";


type button =  categoryType

const buttons: Array<button> = ['Artists', 'Genres', 'Countries']

const SelectCategoryButtons:FC = () => {
  const dispatch = useAppDispatch()
  const category: categoryType = useAppSelector((state: RootState) => state.categories.category)
  const selectCategoryButtonHandler = (label: button) => {
    dispatch(setCategory(label))
  }

  return (
    <div className={styles.buttonsContainer}>
      {category &&
        <div
          className={components.primaryButton}
          onClick={() => selectCategoryButtonHandler(null)}>
          <CloseIcon/>
        </div>
      }

      {buttons.map(label => (
        <div key={label}
             className={category !== label ? components.primaryButton : components['PrimaryButton--selected']}
             onClick={() => selectCategoryButtonHandler(label)}>
          <span
            className={category !== label ? components.primaryButton__text : components['PrimaryButton--selected__text']}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SelectCategoryButtons;