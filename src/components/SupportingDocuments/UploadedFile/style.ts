import styled from "styled-components";

export const StyledDiv = styled.div`
  margin-top: 15px;
  .uploaded-image-wrapper {
    justify-content: space-between;
    align-items: center;
    display: flex;
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    padding: 12px;
    border-radius: 8px;
    &.error {
      border: 1px solid ${({ theme }) => theme.color.red["100"]};

      .delete-action-wrapper {
        svg {
          color: ${({ theme }) => theme.color.red["100"]};
        }
      }
    }
    .uploaded-image-inner-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      .image-wrapper {
        position: relative;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          object-fit: cover;
        }
      }
      .file-information {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        align-items: flex-start;
        gap: 4px;

        .file-name {
          font-size: 14px;
        }

        .file-size {
          font-size: 12px;
          color: ${({ theme }) => theme.color.textColor.lowContrast};
        }
      }
    }
    .delete-action-wrapper {
      cursor: pointer;
    }
  }

  .uploaded-image-error-wrapper {
    .file-upload-error-text {
      font-size: 12px;
      margin-top: 5px;
      color: ${({ theme }) => theme.color.red["100"]};
    }
  }
`;
