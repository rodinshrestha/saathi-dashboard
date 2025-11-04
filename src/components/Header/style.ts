"use client";
import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 64px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
  background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
  border-left: none;
  .container {
    height: 100%;

    .row {
      height: 100%;

      .col {
        height: 100%;
      }
    }
  }
  .header-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    height: 100%;
    .header-slogan {
      color: ${({ theme }) => theme.color.textColor.lowContrast};
    }
  }
`;
