import React, {FC} from 'react';
import Select, {MultiValue, SingleValue, StylesConfig} from "react-select";

export type selectOption = {
  value: string,
  label: string
}

type selectOptionsType = Array<selectOption>

type PropsType = {
  options: string[];
  selectedOption: string | null;
  selectOptionHandler: (selectedOption: MultiValue<selectOption> | SingleValue<selectOption>, actionMeta: any) => void;
};

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

  const formattedOptions = options.map((option: any) => ({
    value: option,
    label: option
  }));

  return (

    <Select
      options={formattedOptions}
      styles={selectStyles}
      isClearable={true}
      value={selectedOption ? { value: selectedOption, label: selectedOption } : null}
      onChange={selectOptionHandler}
    />
  );
};

export default SelectStylized;