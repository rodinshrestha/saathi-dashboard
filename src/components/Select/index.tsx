"use client";
import React from "react";

import clsx from "clsx";
import { default as ReactSelect, SingleValue, MultiValue } from "react-select";

import Tooltip from "../Tooltip";
import Typography from "../Typography";

import CustomLoadingIndicator from "./CustomLoadingIndicator";
import { StyledDiv } from "./style";

export type Option = {
  value: string | number;
  label: string;
};

interface MySelectProps<TMulti extends boolean> {
  options: Option[];
  value: string | number;
  onChange: (
    value: TMulti extends true ? MultiValue<Option> : SingleValue<Option>
  ) => void;
  isMulti?: TMulti;
  label?: string;
  placeholder?: string;
  name?: string;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  showTooltip?: boolean;
  tooltipMsg?: string;
  disabled?: boolean;
  isLoading?: boolean;
  requiredField?: boolean;
  className?: string;
}

export function Select<TMulti extends boolean = false>({
  options,
  isMulti,
  value,
  onChange,
  label,
  placeholder = "Select…",
  name,
  touched,
  onBlur,
  error,
  showTooltip = false,
  disabled = false,
  tooltipMsg,
  isLoading,
  requiredField,
  className,
}: MySelectProps<TMulti>) {
  const selectId = React.useId();
  const requiredLabelId = React.useId();

  const selectedValue = Array.isArray(options)
    ? options.find((x) => x.value === value)
    : null;

  console.log(selectedValue, "@@@");

  const isError = !!error && touched;

  return (
    <StyledDiv
      data-tooltip-id={selectId}
      className={clsx("select-field-wrapper", className)}
    >
      {label && (
        <label htmlFor={selectId} className="react-select-label">
          {label}{" "}
          {requiredField && (
            <span
              data-tooltip-id={requiredLabelId}
              className="label-required-indicator"
            >
              *
            </span>
          )}
        </label>
      )}
      <Tooltip content="Required Field" id={requiredLabelId} />
      <ReactSelect<Option, TMulti>
        name={name}
        inputId={selectId}
        isMulti={isMulti}
        options={options}
        value={selectedValue || null}
        onChange={onChange}
        placeholder={placeholder}
        className="react-select-container"
        classNamePrefix="react-select"
        onBlur={onBlur}
        isDisabled={disabled}
        isLoading={isLoading}
        components={{ LoadingIndicator: CustomLoadingIndicator }}
      />
      {tooltipMsg && showTooltip && (
        <Tooltip id={selectId} content={tooltipMsg} />
      )}
      {isError && (
        <Typography as="p" className="input-error">
          {error}
        </Typography>
      )}
    </StyledDiv>
  );
}
