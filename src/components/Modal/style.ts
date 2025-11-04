"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  &.modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    .modal-dialog {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      background-color: ${({ theme }) =>
        theme.color.backgroundColor.highContrast};
      box-shadow: ${({ theme }) => theme.color.boxShadow};
      min-height: 400px;
      border-radius: 8px;
      z-index: 5;

      .modal-content {
        padding: 24px;

        .modal-header {
          display: flex;
          flex-direction: column;
          gap: 5px;
          position: relative;

          .modal-close-icon {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
          }
        }

        .modal-body {
          padding: 20px 0;
        }
      }
    }
  }
`;
