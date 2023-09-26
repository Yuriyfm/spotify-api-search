import React, {FC} from 'react';
import typography from "@/commonStyles/typography.module.scss";

const MainModeContent: FC = () => {
  return (
    <div>
      <h1 className={typography.titleH1}>
        О приложении
      </h1>
      <p className={typography.paragraph}>
        Приложение Spotify Statistics позволяет получить статистические данные через API Spotify
      </p>
    </div>
  );
};

export default MainModeContent;