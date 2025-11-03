"use client";
import styled, { css, DefaultTheme } from "styled-components";

const style = (theme: DefaultTheme) => css`
  &.h1,
  &.h2,
  &.h3,
  &.h4,
  &.h5,
  &.h6,
  &.p,
  &.subtitle2,
  &.subtitle1 {
    font-family: "ui-sans-serif, system-ui, sans-serif";
    margin-block-start: 0;
    margin-block-end: 0;
    color: ${theme.color.textColor.highContrast};
  }

  &.h1 {
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 1px;
  }

  &.h2 {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 1px;
  }

  &.h3 {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 1px;
  }

  &.h4 {
    font-size: 24px;
    line-height: 30px;
  }

  &.h5 {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 1px;
    font-weight: 400;
  }

  &.h6 {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
  }

  &.p {
    font-size: 14px;
  }

  &.subtitle1 {
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1px;
  }

  &.subtitle2 {
    font-size: 14px;
    line-height: 24px;
    strong {
      font-weight: 500;
    }
  }
`;

export const H1 = styled.h1`
  ${({ theme }) => style(theme)}
`;

export const H2 = styled.h2`
  ${({ theme }) => style(theme)}
`;

export const H3 = styled.h3`
  ${({ theme }) => style(theme)}
`;

export const H4 = styled.h4`
  ${({ theme }) => style(theme)}
`;

export const H5 = styled.h5`
  ${({ theme }) => style(theme)}
`;

export const H6 = styled.h6`
  ${({ theme }) => style(theme)}
`;

export const Paragraph = styled.p`
  ${({ theme }) => style(theme)}
`;

export const Span = styled.span`
  ${({ theme }) => style(theme)}
`;
