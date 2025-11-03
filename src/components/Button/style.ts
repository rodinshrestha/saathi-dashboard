"use client";
import styled, { DefaultTheme, css } from "styled-components";

const defaultBtnStyle = (theme: DefaultTheme) => css`
  text-decoration: none;
  outline: none;
  text-align: center;
  transition: all 0.2s ease-in-out;
  letter-spacing: 1px;
  border-radius: 8px;
  color: ${theme.color.white["100"]};
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.contained {
    background-color: ${theme.color.blue["100"]};
    border: 1px solid ${theme.color.blue["100"]};
    &:hover {
      background-color: ${theme.color.blue["200"]};
      border: 1px solid ${theme.color.blue["200"]};
    }
  }

  &.outline {
    border: 1px solid ${theme.color.borderColor.highContrast};

    &:hover {
      background-color: ${theme.color.backgroundColor.highContrast};
    }
  }

  &.sm {
    min-width: 100px;
  }

  &.md {
    min-width: 290px;
  }
  &.full-width {
    width: 100%;
  }
`;

export const StyledLink = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }
  ${({ theme }) => css`
    ${defaultBtnStyle(theme)}
  `}
`;

export const StyledButton = styled.button`
  &:disabled {
    cursor: not-allowed;
  }
  ${({ theme }) => css`
    ${defaultBtnStyle(theme)}
  `}
`;
