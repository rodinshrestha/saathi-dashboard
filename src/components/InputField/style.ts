"use client";

import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;

  .input-label {
    font-family: "ui-sans-serif, system-ui, sans-serif";
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
  }

  input {
    border-radius: 8px;
    background-color: ${({ theme }) =>
      theme.color.backgroundColor.highContrast};
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid transparent;

    &:focus {
      border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
      outline: ${({ theme }) => theme.color.outlineColor.highContrast};
    }
  }
  .input-error {
    font-size: 12px;
    color: red;
  }
`;
