"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  &.module-section-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    &.multi-form-title {
      margin-top: 20px;
      .body1 {
        font-size: 16px;
        font-weight: 400;
      }
    }

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
