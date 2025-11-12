import styled from "styled-components";

export const StyledDiv = styled.div`
  &.multi-step-form-wrapper {
    /* display: flex; */
    width: 100%;

    .multi-step-form-header-content {
      display: flex;
      justify-content: space-around;

      .multi-step-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${({ theme }) => theme.color.textColor.lowContrast};
        &.active {
          .multi-step-icon-wrapper {
            background-color: ${({ theme }) => theme.color.green["100"]};
            color: ${({ theme }) => theme.color.white["100"]};
          }
          .multi-step-form-label {
            color: ${({ theme }) => theme.color.green["100"]};
          }
        }

        &.current-step {
          .multi-step-icon-wrapper {
            background-color: ${({ theme }) => theme.color.blue["100"]};
            color: ${({ theme }) => theme.color.white["100"]};
          }
          .multi-step-form-label {
            color: ${({ theme }) => theme.color.blue["100"]};
          }
        }

        .multi-step-icon-wrapper {
          height: 40px;
          width: 40px;
          border: 1px solid ${({ theme }) => theme.color.grey["400"]};
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          color: ${({ theme }) => theme.color.textColor.lowContrast};
        }

        .multi-step-form-label {
          font-size: 14px;
          color: inherit;
          margin-top: 10px;
          font-weight: 500;
        }
      }
    }

    .multi-step-form-content-wrapper {
      background-color: ${({ theme }) =>
        theme.color.backgroundColor.lowContrast};
      padding: 24px;
      border-radius: 8px;
      margin-top: 60px;
    }

    .multi-step-form-btn-wrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .btn {
        width: 120px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
