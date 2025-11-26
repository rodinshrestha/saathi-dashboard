import styled from "styled-components";

export const StyledDiv = styled.div`
  &.document-block-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    border-radius: 8px;
    &:hover {
      background-color: ${({ theme }) =>
        theme.color.backgroundColor.highContrast};
    }
    .document-detail-wrapper {
      display: flex;
      gap: 10px;

      .document-icon-wrapper {
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.color.grey["300"]};
        border-radius: 0.25rem;
        position: relative;

        img {
          object-fit: cover;
        }
      }

      .document-content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2px;
        .document-content-id {
          font-size: 14px;
          color: ${({ theme }) => theme.color.textColor.highContrast};
          &::first-letter {
            text-transform: uppercase;
          }
        }
        .document-size-value {
          font-size: 12px;
          color: ${({ theme }) => theme.color.textColor.lowContrast};
          &::first-letter {
            text-transform: uppercase;
          }
        }
      }
    }
    .docoument-download-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      .document-download-icon {
        cursor: pointer;
      }
    }
  }
`;
