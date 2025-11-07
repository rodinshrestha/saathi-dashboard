import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .project-modal-date-wrapper {
    display: flex;
    gap: 40px;

    .date-picker-wrapper {
      flex-grow: 1;
    }
  }

  .project-dynamic-input-field {
    .dynamic-funder-btn-wrapper {
      .btn {
        display: flex;
        justify-content: space-between;
        width: 128px;
        height: 32px;
      }
    }
    .dynamic-input-label-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .input-form-label {
        margin-top: 5px;
      }
    }

    .dynamic-input-field-wrapper {
      display: flex;
      gap: 5px;
      margin-bottom: 15px;

      .input-field-wrapper {
        width: 100%;

        .input-dynamic-field {
          flex: 1;
        }
      }

      .dynamic-input-remove-icon-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 5px 8px;
        box-sizing: border-box;
        border-radius: 8px;
        &:hover {
          background-color: ${({ theme }) =>
            theme.color.backgroundColor.highContrast};
        }
      }
    }
  }

  .project-modal-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    .project-modal-cancel-btn {
      color: ${({ theme }) => theme.color.textColor.highContrast};
    }
  }
`;
