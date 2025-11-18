"use client";

import styled from "styled-components";

export const StyledDiv = styled.div`
  &.chart-wrapper {
    height: 350px;
    padding: 24px;
    position: relative;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
    box-shadow: ${({ theme }) => theme.color.boxShadow};
    display: flex;
    flex-direction: column;
    align-items: center;
    .chart-inner-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 324px !important;
      width: 100%;
    }

    canvas {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .chart-title {
      font-size: 16px;
      color: ${({ theme }) => theme.color.textColor.highContrast};
      margin-bottom: 40px;
      display: flex;
      align-self: flex-start;
    }
  }
`;
