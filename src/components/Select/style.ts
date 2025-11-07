"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  .react-select-label {
    margin-bottom: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
    display: block;
    font-weight: 500;

    .label-required-indicator {
      cursor: pointer;
    }
  }
  .react-select-container {
    .react-select__control {
      position: relative;
      border: none;
      background-color: ${({ theme }) =>
        theme.color.backgroundColor.highContrast};
      outline: none;
      box-shadow: none;

      .react-select__indicator-separator {
        display: none;
      }

      .react-select__indicators {
        .react-select-loader-wrapper {
          left: 50%;
          top: 24%;
          position: absolute;
          .react-select-custom-loader {
            border: 2px solid ${({ theme }) => theme.color.black["100"]}; /* circle border color */
            border-top: 2px solid transparent; /* top is transparent to create spinning effect */
            border-radius: 50%;
            width: 16px; /* circle size */
            height: 16px;
            animation: spin 1s linear infinite;
          }
        }
      }
    }
  }
`;
