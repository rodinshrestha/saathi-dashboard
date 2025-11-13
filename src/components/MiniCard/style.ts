"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  &.mini-card-wrapper {
    padding: 24px;
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    box-shadow: ${({ theme }) => theme.color.boxShadow};
    &.green {
      color: ${({ theme }) => theme.color.green["100"]};

      .mini-card-icon-wrapper {
        background-color: #10b98115;
      }
    }
    &.blue {
      color: ${({ theme }) => theme.color.blue["100"]};

      .mini-card-icon-wrapper {
        background-color: #3b82f615;
      }
    }
    &.orange {
      color: ${({ theme }) => theme.color.orange["100"]};

      .mini-card-icon-wrapper {
        background-color: #ff6b3515;
      }
    }
    &.yellow {
      color: ${({ theme }) => theme.color.yellow["100"]};

      .mini-card-icon-wrapper {
        background-color: #ffd93d15;
      }
    }

    .mini-card-content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .mini-card-label {
        font-size: 14px;
        color: ${({ theme }) => theme.color.textColor.lowContrast};
      }
      .mini-card-value {
        color: inherit;
        font-size: 30px;
      }
    }

    .mini-card-icon-wrapper {
      height: 48px;
      width: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
    }
  }
`;
