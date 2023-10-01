import React from 'react';
import typography from "@/commonStyles/typography.module.scss";
import SelectStylized, {selectOption} from "@/components/commonComponents/SelectStylized";
import {MultiValue, SingleValue} from "react-select";

type selectOptionsType = Array<selectOption>

interface PropsType {
  options: selectOptionsType;
  title: string | null;
  selectOptionHandler: (selectedOption: MultiValue<selectOption> | SingleValue<selectOption>, actionMeta: any) => void;
  selectedOption: selectOption;
}

const SelectFilter = ({options, title, selectedOption, selectOptionHandler}: PropsType) => {

  return (
    <div className={typography.paragraph}>
      <p>{title}</p>
      <SelectStylized options={options} selectedOption={selectedOption}
                      selectOptionHandler={selectOptionHandler}/>
    </div>
  );
};

export default SelectFilter;