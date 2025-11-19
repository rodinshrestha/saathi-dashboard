"use client";
import React from "react";

import clsx from "clsx";

import { Option } from "../Select";
import Tooltip from "../Tooltip";
import Typography from "../Typography";

import { StyleDiv } from "./style";

type InputProps = {
  label?: string;
  error?: string;
  touched?: boolean;
  requiredField?: boolean;
  selectedValues: Array<string>;
  options: Array<Option>;
  onChange: (values: string[]) => void;
  className?: string;
};

const CheckBox = ({
  label,
  error,
  touched,
  requiredField,
  selectedValues,
  options,
  onChange,
  ...rest
}: InputProps) => {
  const inputId = React.useId();
  const requiredLabelId = React.useId();

  const isError = !!error && touched;

  const handleToggle = (value: string) => {
    if (selectedValues?.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <StyleDiv
      className={clsx({ error: !!error }, "checkbox-wrapper", rest.className)}
    >
      {label && (
        <label className="checkbox-label">
          {label}
          {requiredField && (
            <span
              data-tooltip-id={requiredLabelId}
              className="label-required-indicator"
            >
              *
            </span>
          )}
          <Tooltip id={requiredLabelId} content="Required field" />
        </label>
      )}
      <div className="checkbox-inner-wrapper">
        {options.map((option, i) => {
          return (
            <div key={i} className="checkbox-data">
              <input
                type="checkbox"
                id={`checkbox-id-${i}`}
                checked={selectedValues?.includes(option.value as string)}
                onChange={() => handleToggle(option.value as string)}
                {...rest}
              />
              <label className="checkbox-label" htmlFor={`checkbox-id-${i}`}>
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
      {isError && (
        <Typography as="p" className="input-error">
          {error}
        </Typography>
      )}
    </StyleDiv>
  );
};

export default CheckBox;
