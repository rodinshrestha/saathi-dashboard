"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  &.module-section-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    .section-content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .section-btn-wrapper {
      .section-btn {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
