import React, {FC} from 'react';
import style from './categories.module.scss'
import {useAppDispatch, useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
import typography from "@/commonStyles/typography.module.scss";
import styles
  from "@/components/screens/Main/LeftBar/Categories/SelectCategoryButtons/selectCategoryButtonsStyles.module.scss";
import components from "@/commonStyles/components.module.scss";
import CloseIcon from "@/components/Icons/CloseIcon";
import {categoryType, setCategory} from "@/store/categories.slice";
import {RootState} from "@/store/store";

type button = categoryType
const buttons: Array<button> = ['Artists', 'Albums', 'Playlists', 'Tracks',]

const Categories: FC = () => {
  const dispatch = useAppDispatch()
  const category: categoryType = useAppSelector((state: RootState) => state.categories.category)
  const mode = useAppSelector(state => state.mode.mode);

  const selectCategoryButtonHandler = (label: button) => {
    dispatch(setCategory(label))
  }

  return (
    <div className={style['categories-container']}>
      {mode === 'Поиск' &&
        <>
          <p className={typography.paragraph}>Поиск по категориям</p>
          <div className={style['buttons-container']}>
            {category &&
              <div
                className={components['primary-button']}
                onClick={() => selectCategoryButtonHandler(null)}>
                <CloseIcon/>
              </div>
            }
            {buttons.map(label => (
              <div key={label} className={category !== label ?
                components['primary-button'] : components['primary-button_selected']}
                   onClick={() => selectCategoryButtonHandler(label)}>
                <span className={category !== label ?
                    components['primary-button__text'] : components['primary-button_selected__text']}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </>

      }
    </div>
  );
};

export default Categories;