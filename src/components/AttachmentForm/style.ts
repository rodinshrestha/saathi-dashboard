import styled from "styled-components";

export const StyledDiv = styled.div`
  .attachment-form-title-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .form-title {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 0;
    }

    .form-helper-title {
      color: ${({ theme }) => theme.color.textColor.lowContrast};
      font-size: 16px;
      font-weight: 400;
    }
  }

  .attachment-profile-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    .attachment-profile-content {
      display: flex;
      gap: 10px;
      font-size: 14px;
      color: ${({ theme }) => theme.color.textColor.highContrast};
    }

    .attachment-profile-content-wrapper {
      display: flex;
      gap: 20px;
      align-items: flex-start;

      .profile-icon-wrapper {
        position: relative;
        height: 128px;
        width: 128px;
        background-color: ${({ theme }) =>
          theme.color.backgroundColor.highContrast};
        border: 2px dashed
          ${({ theme }) => theme.color.borderColor.highContrast};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
      }

      .profile-content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .profile-upload-btn-wrapper {
          display: flex;
          cursor: pointer;
          padding: 8px 16px;
          border: 1px solid
            ${({ theme }) => theme.color.borderColor.highContrast};
          color: ${({ theme }) => theme.color.textColor.highContrast};
          border-radius: 8px;
          font-size: 14px;

          &:hover {
            background-color: ${({ theme }) =>
              theme.color.backgroundColor.highContrast};
          }
          input {
            display: none;
          }

          svg {
            margin-right: 10px;
          }

          .attachment-profile-upload-btn {
            svg {
              margin-right: 15px;
            }
          }
        }

        .profile-upload-instruction-text {
          margin-top: 10px;
          font-size: 12px;
          color: ${({ theme }) => theme.color.textColor.lowContrast};
          line-height: 18px;
        }

        .profile-picture-error-wrapper {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          font-size: 12px;
          color: ${({ theme }) => theme.color.red["100"]};
          line-height: 18px;
          padding-inline-start: 18px;
        }
      }
    }
  }
`;
