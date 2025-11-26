"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0;
  border: 1px solid black;
  z-index: 10000;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #111112;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);

  .debugger-content {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    padding: 15px 24px;

    p {
      color: #fff;
      font-size: 14px;
    }

    .btn-action {
      cursor: pointer;
      svg {
        color: #fff !important;
      }
    }
  }

  .debugger-setting-wrapper {
    margin-top: 20px;
    padding: 5px 24px;
    display: none;

    &.expand {
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-height: 100px;
    }

    .api-debugger-section {
      display: flex;
      align-items: center;
      gap: 20px;
      p {
        color: #fff;
        font-size: 12px;
      }
    }
  }
`;
