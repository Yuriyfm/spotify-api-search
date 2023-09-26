import React, {FC} from 'react';
import styles from './leftBarStyles.module.scss'
import LeftBarMenu from "@/components/screens/Main/LeftBar/Menu/LeftBarMenu";
import Categories from "@/components/screens/Main/LeftBar/Categories/Categories";
import Filters from "@/components/screens/Main/LeftBar/Filters/Filters";
import CategoryData from "@/components/screens/Main/LeftBar/CategoryData/CategoryData";

const LeftBar: FC = () => {

  return (
    <div className={styles.leftBarContainer}>
      <div className={styles.MenuContainer}>
        <LeftBarMenu/>
      </div>
      <div className={styles.dataContainer}>
        <Categories/>
        <Filters/>
        <CategoryData/>
      </div>
    </div>
  );
};

export default LeftBar;