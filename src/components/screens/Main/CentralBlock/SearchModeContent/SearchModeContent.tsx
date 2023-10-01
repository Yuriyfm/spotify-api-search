import React, {FC} from 'react';
import {categoryType} from "@/store/categories.slice";
import {RootState} from "@/store/store";
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";
import typography from "@/commonStyles/typography.module.scss";
const SearchModeContent: FC = () => {
  const category: categoryType = useAppSelector((state: RootState) => state.categories.category)
  const ContentByCategory = () => {
    switch (category) {
      case "Albums":
        return <p className={typography.paragraph}>Альбомы</p>
      case "Artists":
        return <p className={typography.paragraph}>Артисты/Исполнители</p>
      case "Playlists":
        return <p className={typography.paragraph}>Плейлисты</p>
      case "Tracks":
        return <p className={typography.paragraph}>Треки</p>
    }
  }

  return (
    <div>

      <ContentByCategory/>
    </div>
  );
};

export default SearchModeContent;