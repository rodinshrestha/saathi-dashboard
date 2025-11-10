"use client";
import styled from "styled-components";

export const StyledDiv = styled.div<{ $active?: boolean }>`
  &.pagination-wrapper {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    border-top: none;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    position: absolute;
    right: -1px;
    bottom: -50px;
    padding: 10px 20px;
    display: flex;
    gap: 10px;
    .page-index-wrapper {
      font-size: 14px;
      display: flex;
      align-self: center;
    }
    .per-page-wrapper {
      display: flex;
      align-items: center;

      .table-per-page {
        border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
        padding: 0.4rem;
        border-radius: 6px;
      }
    }
  }
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  padding: 0.4rem 0.7rem;
  border: 1px solid #d3d3d3;
  background: ${({ $active, theme }) =>
    $active ? theme.color.blue["100"] : theme.color.white["100"]};
  color: ${({ $active, theme }) =>
    $active ? theme.color.white["100"] : theme.color.black["300"]};
  border-radius: 6px;
  cursor: pointer;
  min-width: 32px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ $active, theme }) =>
      $active ? theme.color.blue["100"] : theme.color.white["200"]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
