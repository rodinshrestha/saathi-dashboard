"use client";

import React from "react";

import ReactDatePicker from "react-datepicker";

import Tooltip from "../Tooltip";
import Typography from "../Typography";

import { StyledDiv } from "./style";

import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  onChange: (date: Date | null | [Date | null, Date | null]) => void;
  selected: Date | null;
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  minDate?: Date | null;
  maxDate?: Date;
  selectRange?: boolean;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  openToDate?: Date | null;
  disabled?: boolean;
  tooltipMsg?: string;
  showToolttip?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  selected,
  onChange,
  placeholder = "dd/mm/yyyy",
  openToDate = new Date(),
  id,
  name,
  minDate,
  maxDate,
  onBlur,
  error,
  touched,
  disabled,
  tooltipMsg,
  showToolttip,
}) => {
  const dateId = React.useId();

  const inputId = id || dateId;

  const isError = !!error && touched;

  return (
    <StyledDiv className="date-picker-wrapper" data-tooltip-id={inputId}>
      {label && (
        <label htmlFor={inputId} className="date-picker-label">
          {label}
        </label>
      )}
      <ReactDatePicker
        id={inputId}
        name={name}
        selected={selected}
        onChange={onChange}
        placeholderText={placeholder}
        openToDate={openToDate as Date}
        className="date-picker"
        dateFormat="dd-MM-yyyy"
        minDate={minDate as Date}
        maxDate={maxDate}
        onBlur={onBlur}
        disabled={disabled}
      />

      {tooltipMsg && showToolttip && (
        <Tooltip id={inputId} content={tooltipMsg} />
      )}
      {isError && (
        <Typography as="p" className="input-error">
          {error}
        </Typography>
      )}
    </StyledDiv>
  );
};

export default DatePicker;
