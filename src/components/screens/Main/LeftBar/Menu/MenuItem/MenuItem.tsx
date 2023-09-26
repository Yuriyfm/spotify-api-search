import React, {FC} from 'react';
import styles from './MenuItemStyles.module.scss'
import {MenuItemType} from "@/components/screens/Main/LeftBar/Menu/LeftBarMenu";
import {AppDispatch, RootState} from "@/store/store";
import {useDispatch} from "react-redux";
import {setMainMode, setSearchMode} from "@/store/mode.slice";
import {setCategory} from "@/store/categories.slice";
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";


const MenuItem: FC<MenuItemType> = ({icon, label}) => {
  const dispatch: AppDispatch = useDispatch()
  const mode: any = useAppSelector((state: RootState) => state.mode.mode)

  const onClickHandler = () => {
    switch (label) {
      case 'Главная':
        dispatch(setMainMode())
        dispatch(setCategory(null))
        break
      case 'Поиск':
        dispatch(setSearchMode())
    }
  }

  return (
    <div className={mode !== label ? styles.menuItem : styles.selectedMenuItem} onClick={onClickHandler}>
      {icon}
      <span className={mode !== label ? styles.menuItem__text : styles.selectedMenuItem__text}>
        {label}
      </span>
    </div>
  );
};

export default MenuItem;