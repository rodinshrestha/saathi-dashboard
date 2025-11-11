"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  &.card-wrapper {
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    padding: 24px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};

    &.prevention {
      .icon-wrapper {
        background-color: rgba(16, 185, 129, 0.125);
      }
      .card-feature-list {
        li::marker {
          color: ${({ theme }) => theme.color.green["100"]};
        }
      }
      .card-feature-btn-wrapper {
        a {
          color: ${({ theme }) => theme.color.green["100"]};
        }
      }
    }
    &.prosecution {
      .icon-wrapper {
        background-color: #3b82f620;
      }
      .card-feature-list {
        li::marker {
          color: ${({ theme }) => theme.color.blue["300"]};
        }
      }
      .card-feature-btn-wrapper {
        a {
          color: ${({ theme }) => theme.color.blue["300"]};
        }
      }
    }
    &.response {
      .icon-wrapper {
        background-color: #ff6b3520;
      }
      .card-feature-list {
        li::marker {
          color: ${({ theme }) => theme.color.orange["100"]};
        }
      }
      .card-feature-btn-wrapper {
        a {
          color: ${({ theme }) => theme.color.orange["100"]};
        }
      }
    }
    &.protection {
      .icon-wrapper {
        background-color: #ffd93d20;
      }
      .card-feature-list {
        li::marker {
          color: ${({ theme }) => theme.color.yellow["100"]};
        }
      }
      .card-feature-btn-wrapper {
        a {
          color: ${({ theme }) => theme.color.yellow["100"]};
        }
      }
    }
    &:hover {
      border-color: oklab(63.714% -0.035553 -0.19199 / 0.3);
      scale: 1.02;
      box-shadow:
        0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    }

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
        box-shadow:
          0 1px 3px 0 #0000001a,
          0 1px 2px -1px #0000001a;
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
      margin-top: 35px;
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
