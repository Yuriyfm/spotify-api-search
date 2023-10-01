import React, {FC} from 'react';
import typography from "@/commonStyles/typography.module.scss";

const MainModeContent: FC = () => {
  return (
    <div>
      <h1 className={typography['title-h1']}>
        О приложении
      </h1>
      <p className={typography.paragraph}>
        Приложение Spotify Deep Search приложение для тех, кто хочет получить максимально точные и персонализированные
        результаты при поиске музыки в каталоге Spotify. С помощью данного приложения вы сможете использовать
        расширенные фильтры и параметры, которые позволят вам найти именно ту музыку или артиста, который отвечает
        вашим требованиям.
      </p>
    </div>
  );
};

export default MainModeContent;