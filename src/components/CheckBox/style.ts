"use client";

import styled from "styled-components";

export const StyleDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 100%;

  &.bg-color {
    input {
      background-color: ${({ theme }) =>
        theme.color.backgroundColor.highContrast} !important;
    }
  }

  &.flex-2 {
    flex: 2;
  }

  .checkbox-label {
    font-size: 14px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
    font-weight: 500;
    .label-required-indicator {
      cursor: pointer;
      margin-left: 3px;
    }
  }

  .checkbox-inner-wrapper {
    position: relative;
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
    border-radius: 8px;
    gap: 20px;
    align-items: flex-start;

    .checkbox-data {
      display: flex;
      flex: 0 0 30%;
      width: auto;
      gap: 5px;
      input {
        cursor: pointer;

        box-sizing: border-box;
        border-radius: 8px;
        background-color: ${({ theme }) =>
          theme.color.cardBgColor.highContrast};
        padding: 8px 12px;
        font-size: 14px;
        border: 1px solid transparent;
        color: ${({ theme }) => theme.color.textColor.highContrast};

        &:focus {
          border: 1px solid
            ${({ theme }) => theme.color.borderColor.highContrast};
          outline: ${({ theme }) => theme.color.outlineColor.highContrast};
        }
        &:disabled {
          cursor: not-allowed;
        }
      }
      input[type="checkbox"] {
        accent-color: #000; /* controls check & fill */
      }

      .checkbox-label {
        white-space: nowrap;
        cursor: pointer;
      }
    }
  }
`;
