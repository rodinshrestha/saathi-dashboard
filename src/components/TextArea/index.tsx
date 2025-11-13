import React from "react";

import clsx from "clsx";

import Typography from "../Typography";

import { TextAreaContainer } from "./style";

type TextareaProps = {
  label?: string;
  name?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  rows?: number;
  disabled?: boolean;
  className?: string;
  touched?: boolean;
};

const TextArea = ({
  label,
  error,
  rows = 4,
  touched,
  disabled,
  value,
  ...rest
}: TextareaProps) => {
  const inputId = React.useId();
  const isError = !!error && touched;

  return (
    <TextAreaContainer
      className={clsx(
        { error: !!error },
        "input-field-wrapper",
        rest.className
      )}
    >
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <div className="input-wrapper">
        <textarea
          id={inputId}
          autoComplete={"off"}
          rows={rows}
          value={value}
          disabled={disabled}
          {...rest}
        />
      </div>
      {isError && (
        <Typography as="p" className="input-error">
          {error}
        </Typography>
      )}
    </TextAreaContainer>
  );
};

export default TextArea;
