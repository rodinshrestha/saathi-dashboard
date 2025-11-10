"use client";

import styled from "styled-components";

export const StyledNavBar = styled.nav`
  &.navbar-wrapper {
    --w: 84px;
    width: 84px;
    min-width: var(--w);
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    transition: all 0.2s linear;

    .nav-item {
      .nav-item-label {
        display: none;
      }
    }

    &.expanded {
      --w: 248.5px;

      .nav-item-label {
        display: unset;
        white-space: nowrap;
      }
    }

    .navbar-expand-icon-wrapper {
      position: absolute;
      border-radius: 50%;
      height: 26px;
      width: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0px;
      top: 12px;
      cursor: pointer;
    }

    .navbar-header {
      height: 64px;
      text-align: center;
      color: ${({ theme }) => theme.color.textColor.highContrast};
    }

    .navbar-list-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .navbar-top-wrapper {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .nav-item {
          display: flex;
          align-items: center;
          overflow: hidden;
          gap: 16px;
          padding: 16px;
          cursor: pointer;
          border-radius: 8px;
          color: ${({ theme }) => theme.color.textColor.highContrast};
          text-decoration: none;
          &:hover {
            background-color: ${({ theme }) =>
              theme.color.hoverBgColor.highContrast};
          }

          &.active {
            background-color: ${({ theme }) => theme.color.blue["100"]};
            color: ${({ theme }) => theme.color.white["100"]};
          }
        }
      }
    }
    .navbar-bottom-wrapper {
      .navbar-button {
        color: ${({ theme }) => theme.color.textColor.highContrast};
        display: flex;
        gap: 15px;
      }
    }
  }
`;
