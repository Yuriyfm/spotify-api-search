import React, {FC} from 'react';
import typography from "@/commonStyles/typography.module.scss";
import Select, {StylesConfig} from 'react-select'

type option = {
  value: string,
  label: string
}

type optionsType = Array<option>


const options: optionsType = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
]

const selectStyles: StylesConfig<option> = {
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
    color: isSelected ? 'lightgrey': 'white',
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
  })

}

const ArtistsFilters: FC = () => {

  return (
    <div className={typography.paragraph}>
      <p>фильтры по исполнителям</p>
      <Select options={options} styles={selectStyles}/>
    </div>
  );
};

export default ArtistsFilters;