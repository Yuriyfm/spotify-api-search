import React, {FC} from 'react';
import Select, {MultiValue, SingleValue, StylesConfig} from "react-select";

export type selectOption = {
  value: string,
  label: string
}

type selectOptionsType = Array<selectOption>

interface PropsType {
  options: selectOptionsType;
  selectOptionHandler: (selectedOption: MultiValue<selectOption> | SingleValue<selectOption>, actionMeta: any) => void;
  selectedOption: selectOption;
}

const SelectStylized: FC<PropsType> = ({options, selectedOption, selectOptionHandler}) => {
  const selectStyles: StylesConfig<selectOption> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#2a2a2a',
      borderRadius: 20,
      outline: '#3c3c3c',
      border: 'solid 1px #2a2a2a',
    }),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => ({
      ...styles,
      backgroundColor: '#2a2a2a',
      color: isSelected ? 'lightgrey' : 'white',
      ':active': {
        ...styles[':active'],
        backgroundColor: '#2a2a2a',
      },
      cursor: 'pointer',
      ':hover': {
        color: 'lightgrey'
      }
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: '#2a2a2a',
    }),
    input: (styles) => ({
      ...styles,
      color: 'white',
    }),
    singleValue: (styles) => ({
      ...styles,
      fontSize: 15,
      fontWeight: 400,
      color: 'white',
    })
  }

  return (
    <Select
      options={options}
      styles={selectStyles}
      isClearable={true}
      value={selectedOption}
      placeholder={''}
      onChange={selectOptionHandler}
    />
  );
};

export default SelectStylized;