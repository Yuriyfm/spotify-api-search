import React, {FC} from 'react';
import {closeIconStyle, menuIconsStyle} from "@/components/Icons/iconsSvgStyle";



const CloseIcon: FC = () => {
  return (
    <svg role="img" height={closeIconStyle.height} width={closeIconStyle.width}
         aria-hidden="true" viewBox={closeIconStyle.viewbox} fill={closeIconStyle.fillColor}>
      <path
        d="M1.47 1.47a.75.75 0 0 1 1.06 0L8 6.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L9.06 8l5.47 5.47a.75.75 0 1 1-1.06 1.06L8 9.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L6.94 8 1.47 2.53a.75.75 0 0 1 0-1.06z"></path>
    </svg>
    )
}

export default CloseIcon;