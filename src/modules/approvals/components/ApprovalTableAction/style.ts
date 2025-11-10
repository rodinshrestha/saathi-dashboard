"use client";

import styled from "styled-components";

export const StyleDiv = styled.div`
  display: flex;
  gap: 20px;

  .action-approval-btn {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      background-color: ${({ theme }) =>
        theme.color.backgroundColor.highContrast};
    }

    &.approved {
      color: ${({ theme }) => theme.color.green["200"]};
      &:hover {
        color: ${({ theme }) => theme.color.green["300"]};
      }
    }

    &.cancelled {
      color: ${({ theme }) => theme.color.orange["100"]};
    }

    .approval-custom-icon {
      transform: rotate(45deg);
    }
  }
`;
