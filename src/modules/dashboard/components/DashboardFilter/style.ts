"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  margin-top: 20px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
  .body2 {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.textColor.highContrast};
  }

  .dashboard-filter-wrapper {
    display: flex;
    gap: 10px;
    align-items: flex-end;
    margin-top: 20px;

    label {
      font-weight: 400;
      color: ${({ theme }) => theme.color.textColor.lowContrast};
      margin-bottom: 10px;
    }

    .table-search-wrapper {
      .search-wrapper {
        border: none;
      }
    }

    .date-picker-wrapper {
      flex: 0 0 16%;
    }

    .select-field-wrapper {
      flex: 0 0 16%;
    }

    .btn {
      flex: 0 0 16%;
      svg {
        margin-right: 10px;
      }
    }
  }

  .dashboard-filter-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;

    .btn {
      svg {
        margin-right: 10px;
      }
    }
  }
`;
