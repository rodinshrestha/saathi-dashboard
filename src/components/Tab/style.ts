"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  .tab-header-list {
    display: flex;
    gap: 5px;
    padding: 3px;
    background-color: ${({ theme }) =>
      theme.color.backgroundColor.highContrast};
    border-radius: 12px;
    margin-bottom: 15px;
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};

    .tab-header {
      flex: 1 1 50%;
      text-align: center;
      color: ${({ theme }) => theme.color.textColor.highContrast};
      padding: 4px 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;

      &.active {
        background-color: ${({ theme }) =>
          theme.color.backgroundColor.lowContrast};
        border-radius: 14px;
      }

      &.disabled {
        cursor: not-allowed;
        opacity: 0.2;
      }
    }
  }
`;
