import styled from "styled-components";

export const StyledDiv = styled.div`
  .participant-title-wrapper {
    display: flex;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .form-title {
      display: flex;
      align-self: center;
      align-items: center;
    }

    .btn {
      display: flex;
      width: 160px;
      justify-content: space-between;
    }
  }

  .participants-header-wrapper {
    display: flex;
    gap: 10px;
  }

  .participants-table-wrapper {
    .participant-table-data {
      margin-top: 20px;
      display: flex;
      border-top: 1px solid
        ${({ theme }) => theme.color.borderColor.highContrast};
      padding-top: 10px;
      gap: 10px;

      .participant-table-index {
        min-width: 22.23px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .input-field-wrapper {
        height: 38px;
        .input-wrapper {
          height: 100%;

          input {
            height: 100%;
          }
        }
      }

      .participant-action-wrapper {
        min-width: 41.08px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.color.red["100"]};
        cursor: pointer;
      }
    }
  }
`;
