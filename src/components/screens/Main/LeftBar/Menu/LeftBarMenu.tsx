import React, {FC} from 'react';
import HomeIcon from "@/components/Icons/HomeIcon";
import MenuItem from "@/components/screens/Main/LeftBar/Menu/MenuItem/MenuItem";
import SearchIcon from "@/components/Icons/SearchIcon";

export type MenuItemType = {
  icon: React.JSX.Element;
  label: string;
};


const LeftBarMenu:FC = () => {
  const MenuItems: MenuItemType[] = [
    {icon: <HomeIcon label={'Главная'}/>, label: 'Главная'},
    {icon: <SearchIcon label={'Поиск'}/>, label: 'Поиск'}
  ]

  return (
    <>
      {MenuItems.map((item, i) => (
        <MenuItem key={i} icon={item.icon} label={item.label}/>
      ))}
    </>
  );
};

export default LeftBarMenu;