import React, {FC} from 'react';
import styles from './centralBlockStyles.module.scss'
import {RootState} from "@/store/store";
import MainModeContent from "@/components/screens/Main/CentralBlock/MainModeContent/MainModeContent";
import SearchModeContent from "@/components/screens/Main/CentralBlock/SearchModeContent/SearchModeContent";
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
const CentralBlock: FC = () => {
  const mode: string = useAppSelector((state: RootState) => state.mode.mode)

  return (
    <div className={styles.centralBlockContainer}>
      {mode === 'Главная'
      ? <MainModeContent/>
      : <SearchModeContent/>
      }
    </div>
  );
};

export default CentralBlock;