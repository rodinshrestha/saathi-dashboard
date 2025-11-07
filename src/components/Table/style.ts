"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  overflow-x: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 24px;

    tr {
      border-bottom: 1px solid
        ${({ theme }) => theme.color.borderColor.highContrast};

      &:hover {
        background-color: ${({ theme }) =>
          theme.color.backgroundColor.highContrast};
      }
      &:last-child {
        border-bottom: none;
      }
    }

    td {
      height: 40px;
      padding: 0 8px;
      width: 190px;

      .table-action-wrapper {
        display: flex;
        gap: 10px;
        .table-action-icon {
          display: flex;
          cursor: pointer;
          padding: 8px;
          box-sizing: border-box;
          border-radius: 8px;
          &:hover {
            background-color: ${({ theme }) => theme.color.grey[200]};
          }
        }
      }
    }
  }
`;

export const TableHeader = styled.th<{ isSorted?: string }>`
  padding: 12px;
  text-align: left;
  background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  font-weight: 500;

  &::after {
    content: ${({ isSorted }) =>
      isSorted === "asc" ? "' 🔼'" : isSorted === "desc" ? "' 🔽'" : "''"};
    margin-left: 6px;
  }
`;
