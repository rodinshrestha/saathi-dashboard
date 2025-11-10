"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  &.card-wrapper {
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    padding: 24px;
    border-radius: 8px;

    .card-icon-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .icon-wrapper {
        height: 64px;
        width: 64px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(16, 185, 129, 0.125);
      }
      .card-icon-info {
        display: flex;
        height: auto;
        font-size: 12px;
        color: ${({ theme }) => theme.color.textColor.highContrast};
        border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
        padding: 2px 8px;
        border-radius: 8px;
      }
    }

    .card-title-wrapper {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 15px;

      .card-title {
        font-size: 20px;
        color: ${({ theme }) => theme.color.textColor.highContrast};
      }
      .card-sub-title {
        font-size: 14px;
        color: ${({ theme }) => theme.color.textColor.lowContrast};
      }
    }

    .card-feature-wrapper {
      margin-top: 50px;
      padding-bottom: 20px;
      border-bottom: 1px solid
        ${({ theme }) => theme.color.borderColor.highContrast};

      .card-feature-title {
        color: ${({ theme }) => theme.color.textColor.lowContrast};
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 10px;
      }

      .card-feature-list {
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 14px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 14px;
        color: ${({ theme }) => theme.color.textColor.lowContrast};
      }
    }

    .card-feature-btn-wrapper {
      padding-top: 15px;

      a {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        text-decoration: none;
      }
    }
  }
`;
