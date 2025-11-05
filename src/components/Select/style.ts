"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  .react-select-label {
    margin-bottom: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
    display: block;
  }
  .react-select-container {
    .react-select__control {
      border: none;
      background-color: ${({ theme }) =>
        theme.color.backgroundColor.highContrast};
      outline: none;
      box-shadow: none;

      .react-select__indicator-separator {
        display: none;
      }
    }
  }
`;
