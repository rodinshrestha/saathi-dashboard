"use client";

import styled from "styled-components";

export const StyledDiv = styled.div`
  &.barchart-wrapper {
    height: 400px;
    padding: 24px;
    position: relative;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
    box-shadow: ${({ theme }) => theme.color.boxShadow};

    /* 🔥 MAIN FIX */
    min-width: 0;

    canvas {
      /* 🔥 ALLOW SHRINK */
      width: 100% !important;
      min-width: 0 !important;
      display: block;
      height: 350px !important;
    }

    .bar-chart-title {
      font-size: 16px;
      margin-bottom: 40px;
    }
  }
`;
