"use client";

import styled from "styled-components";

export const TextAreaContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;

  &.bg-color {
    textarea {
      background-color: ${({ theme }) =>
        theme.color.backgroundColor.highContrast} !important;
    }
  }

  &.flex-2 {
    flex: 2;
  }

  .input-label {
    font-size: 14px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
    font-weight: 500;
    .label-required-indicator {
      cursor: pointer;
      margin-left: 3px;
    }
  }

  .input-wrapper {
    width: 100%;
    position: relative;
    textarea {
      box-sizing: border-box;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.color.cardBgColor.highContrast};
      padding: 8px 12px;
      font-size: 14px;
      border: 1px solid transparent;
      width: 100%;
      color: ${({ theme }) => theme.color.textColor.highContrast};

      &:focus {
        border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
        outline: ${({ theme }) => theme.color.outlineColor.highContrast};
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;
