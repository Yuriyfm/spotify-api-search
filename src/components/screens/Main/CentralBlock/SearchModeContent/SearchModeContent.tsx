import React, {FC} from 'react';
import {categoryType} from "@/store/categories.slice";

import {RootState} from "@/store/store";
import GenresSearchResult
  from "@/components/screens/Main/CentralBlock/SearchModeContent/GenresSearchResult/GenresSearchResult";
import {useAppSelector} from "@/hooks/useSelectorAndUseDispatchHooks";

const SearchModeContent: FC = () => {
  const category: categoryType = useAppSelector((state: RootState) => state.categories.category)
  const ContentByCategory = () => {
    switch (category) {
      case "Genres":
        return <GenresSearchResult/>
        break
      case "Artists":
        return "Артисты/Исполнители"
        break
    }
  }

  return (
    <div>
      <ContentByCategory/>
    </div>
  );
};

export default SearchModeContent;