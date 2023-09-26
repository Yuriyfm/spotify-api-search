import React, {FC} from 'react';
import {menuIconsStyle} from "@/components/Icons/iconsSvgStyle";
import {AppDispatch, RootState} from "@/store/store";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";

type homeIconProps = {
  label: 'Поиск' | 'Главная' | null
}

const HomeIcon = ({label}: homeIconProps) => {
  const dispatch: AppDispatch = useDispatch()
  const mode: any = useAppSelector((state: RootState) => state.mode.mode)
  if (label == mode) {
    return (
      <svg role="img" height={menuIconsStyle.height} width={menuIconsStyle.width}
           aria-hidden="true" viewBox={menuIconsStyle.viewbox} fill={menuIconsStyle.activeFillColor}>
        <path
          d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
      </svg>
    )
  }
  return (
  <>
    <svg role="img" height={menuIconsStyle.height} width={menuIconsStyle.width}
         aria-hidden="true" viewBox={menuIconsStyle.viewbox} fill={menuIconsStyle.fillColor}>
      <path
        d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
    </svg>
  </>
);

}

export default HomeIcon;