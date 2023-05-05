import React from "react";
import { InputForm, InputFormCOntainer, LabelForm } from "../Utils/Styles/form";

const Form = ({ name, value, type, label, fn }) => {
  return (
    <InputFormCOntainer>
      <LabelForm htmlFor="">{label}</LabelForm>
      <InputForm
        type={type}
        placeholder={label}
        value={value}
        name={name}
        onChange={fn}
      />
    </InputFormCOntainer>
  );
};

export default Form;
