"use client";
import styled, { DefaultTheme, css } from "styled-components";

const defaultBtnStyle = (theme: DefaultTheme) => css`
  text-decoration: none;
  outline: none;
  text-align: center;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  color: ${theme.color.white["100"]};
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 500;

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
    color: ${({ theme }) => theme.color.textColor.highContrast};
    letter-spacing: 0;

    &:hover {
      background-color: ${theme.color.backgroundColor.highContrast};
    }
  }

  &.sm {
    min-width: 100px;
  }

  &.md {
    min-width: 183px;
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
  ${({ theme }) => css`
    ${defaultBtnStyle(theme)}
  `}

  &.btn-loader {
    min-height: 33px;
    position: relative;
    pointer-events: none;
    background-color: ${({ theme }) => theme.color.grey["100"]};
    border: 1px solid ${({ theme }) => theme.color.grey["100"]};

    .loader {
      border: 2px solid #fff; /* circle border color */
      border-top: 2px solid transparent; /* top is transparent to create spinning effect */
      border-radius: 50%;
      width: 16px; /* circle size */
      height: 16px;
      animation: spin 1s linear infinite;
      position: absolute;
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.grey["100"]};
    border: 1px solid ${({ theme }) => theme.color.grey["100"]};

    &:hover {
      background-color: ${({ theme }) => theme.color.grey["100"]};
      border: 1px solid ${({ theme }) => theme.color.grey["100"]};
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
