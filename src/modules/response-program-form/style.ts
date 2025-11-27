"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  .multi-form-title {
    margin-bottom: 0 !important;
  }
  .response-program-subtitle {
    font-size: 16px;
    color: ${({ theme }) => theme.color.textColor.lowContrast};
  }

  .program-form-selection-wrapper {
    display: flex;
    gap: 20px;
    margin-top: 30px;

    .program-selection-content {
      flex-grow: 1;
      padding: 26px;
      border-radius: 14px;
      text-decoration: none;
      color: ${({ theme }) => theme.color.textColor.highContrast};
      border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
      cursor: pointer;
      background-color: ${({ theme }) =>
        theme.color.backgroundColor.lowContrast};
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.02);
        outline: rgba(59, 130, 246, 0.5);
        box-shadow:
          0 4px 6px -1px rgb(0 0 0 / 0.1),
          0 2px 4px -2px rgb(0 0 0 / 0.1);
      }

      .program-selection-title {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 20px;
      }

      .program-selection-helper-text {
        font-size: 16px;
        color: ${({ theme }) => theme.color.textColor.lowContrast};
        line-height: 21px;
      }
    }
  }
`;
