"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  /* overflow-x: auto; */
  border: 1px solid #ddd;
  position: relative;
  border-radius: 8px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.cardBgColor.highContrast};
  border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
  border-bottom-right-radius: 0;
  &.box-shadow {
    box-shadow: ${({ theme }) => theme.color.boxShadow};
  }
  .table-title-wrapper {
    display: flex;
    justify-content: space-between;

    .table-title {
      display: flex;
      align-self: center;
    }
  }

  table,
  th,
  td {
    font-family: ${({ theme }) => theme.fonts.sans} !important;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 24px;
    font-family: ${({ theme }) => theme.fonts.sans} !important;

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
      text-transform: capitalize;
      font-size: 14px;
      color: ${({ theme }) => theme.color.textColor.highContrast};

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

    .no-data-found-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
      width: 100%;
      text-align: center;
    }
  }
`;

export const TableHeader = styled.th<{ isSorted?: string }>`
  padding: 12px;
  padding-left: 8px;
  text-align: left;
  background-color: inherit;
  color: ${({ theme }) => theme.color.textColor.highContrast};
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  font-weight: 500;

  &::after {
    content: ${({ isSorted }) =>
      isSorted === "asc" ? "' 🔼'" : isSorted === "desc" ? "' 🔽'" : "''"};
    margin-left: 6px;
  }
`;
