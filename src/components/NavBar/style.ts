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
        /* display: none;
         */
        opacity: 0;
        white-space: nowrap;
      }
    }

    &.expanded {
      --w: 248.5px;

      .navbar-header {
        .navbar-logo-wrapper {
          width: 120px;
          min-width: 120px;
        }
      }

      .nav-item-label {
        display: unset;
        opacity: 1;
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
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      .navbar-logo-wrapper {
        height: 64px;
        min-width: 50px;
        /* width: 120px; */
        /* min-width: 120px; */
        /* min-width: 85px !important; */
        /* width: 85px !important; */

        position: relative;

        img {
          object-fit: contain;
        }
      }
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
          box-sizing: border-box;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 16px;
          cursor: pointer;
          border-radius: 8px;
          width: 100%;
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

          svg {
            min-width: 55px;
            margin-left: -18px;
          }
          .nav-item-label {
            transition: all 0.2s ease-in-out;
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
