import React from "react";

import clsx from "clsx";

import Typography from "../Typography";

import { InputContainer } from "./style";

type InputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({ label, error, ...rest }: InputProps) => {
  const inputId = React.useId();

  return (
    <InputContainer className={clsx({ error: !!error })}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <input id={inputId} {...rest} />
      {error && (
        <Typography as="p" className="input-error">
          {error}
        </Typography>
      )}
    </InputContainer>
  );
};

export default InputField;
