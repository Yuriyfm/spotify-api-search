import React, {FC, useEffect} from 'react';
import styles from './main.module.scss'
import {getAuthToken} from "@/store/authToken.slice";
import LeftBar from "@/components/screens/Main/LeftBar/LeftBar";
import CentralBlock from "@/components/screens/Main/CentralBlock/CentralBlock";
import {useAppDispatch, useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
const Main: FC = () => {
  const dispatch = useAppDispatch();
  const token: any = useAppSelector(state => state.authToken.authToken);
  console.log(token)
  useEffect(() => {
    !token && dispatch(getAuthToken())
  }, [])

  return (
    <div className={styles.main}>
      <LeftBar/>
      <CentralBlock/>
    </div>
  );
};

export default Main;