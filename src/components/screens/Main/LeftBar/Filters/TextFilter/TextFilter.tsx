import React, { FC, ChangeEvent } from 'react';
import components from '@/commonStyles/components.module.scss';
import typography from "@/commonStyles/typography.module.scss";
import SelectStylized from "@/components/commonComponents/SelectStylized";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextInput: FC<InputProps> = ({title, value, onChange, placeholder }) => {
  return (
    <div className={typography.paragraph}>
      <p>{title}</p>
      <input
        className={components["stylized-input"]}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;