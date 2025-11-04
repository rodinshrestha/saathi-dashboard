import React from "react";

import clsx from "clsx";
import { Eye, EyeClosed } from "lucide-react";

import Typography from "../Typography";

import { InputContainer } from "./style";

type InputProps = {
  label?: string;
  error?: string;
  touched?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  label,
  error,
  touched,
  autoComplete,
  type,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputId = React.useId();

  const isError = !!error && touched;

  return (
    <InputContainer className={clsx({ error: !!error })}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <div className="input-wrapper">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          id={inputId}
          autoComplete={autoComplete || "off"}
          {...rest}
        />

        {type === "password" &&
          (showPassword ? (
            <EyeClosed
              fontSize={12}
              className="password-toggle-icon"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <Eye
              fontSize={12}
              className="password-toggle-icon"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ))}
      </div>
      {isError && (
        <Typography as="p" className="input-error">
          {error}
        </Typography>
      )}
    </InputContainer>
  );
};

export default InputField;
