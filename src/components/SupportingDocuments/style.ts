import styled from "styled-components";

export const StyledDiv = styled.div`
  &.supporting-document-wrapper {
    margin-top: 40px;
    .supporting-document-title {
      display: flex;
      gap: 10px;
      font-size: 14px;
    }

    .supporting-upload-area {
      margin-top: 20px;
      height: 164px;
      width: 100%;
      border-radius: 8px;
      border: 2px dashed ${({ theme }) => theme.color.borderColor.highContrast};
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        border-color: ${({ theme }) => theme.color.blue["100"]};
      }

      .hidden {
        display: none;
      }

      .upload-information-wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        width: 100%;
        height: 100%;
        cursor: pointer;

        .upload-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: oklab(63.714% -0.035553 -0.19199 / 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .file-upload-title-wrapper {
          font-size: 14px;
          display: flex;
          gap: 4px;

          .file-upload-title {
            color: ${({ theme }) => theme.color.blue["100"]};
          }
        }

        .supporting-upload-file-size-info {
          color: ${({ theme }) => theme.color.textColor.lowContrast};
          font-size: 12px;
        }
      }
    }
  }

  .upload-area-instruction-list-wrapper {
    margin-top: 20px;
    border-radius: 8px;
    padding: 12px;
    background-color: ${({ theme }) =>
      theme.color.backgroundColor.highContrast};
    color: ${({ theme }) => theme.color.textColor.lowContrast};
    border: 1px solid ${({ theme }) => theme.color.blue["400"]};

    .upload-instruction-title {
      color: inherit;
      font-size: 12px;
    }

    .upload-instruction-content-wrapper {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding-inline-start: 18px;
      margin-bottom: 0;
    }
  }
`;
