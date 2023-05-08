import React from "react";
import {
  InputField,
  InputFieldContainer,
  LabelField,
} from "./inputField.styles";

const index = ({ name, value, type, label, fn }) => {
  return (
    <InputFieldContainer>
      <LabelField htmlFor="">{label}</LabelField>
      <InputField
        type={type}
        placeholder={label}
        value={value}
        name={name}
        onChange={fn}
      />
    </InputFieldContainer>
  );
};

export default index;
