import styled from "styled-components";

export const StyledDiv = styled.div`
  .loader-wrapper {
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .registration-wrapper {
    padding: 10px;
    border-radius: 8px;
    display: flex;
    gap: 20px;

    .registration-avatar-wrapper {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.color.white["100"]};
      text-transform: uppercase;
      position: relative;
      &.bg-color {
        background-color: ${({ theme }) => theme.color.blue["100"]};
      }

      img {
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .registration-personal-details-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;

      .registration-personal-name-content {
        font-size: 18px;
        font-weight: 400;
        color: ${({ theme }) => theme.color.textColor.highContrast};
      }
      .registration-personal-id-content {
        font-size: 14px;
        color: ${({ theme }) => theme.color.textColor.lowContrast};
      }

      .registration-personal-status {
        font-size: 12px;
        border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
        font-weight: 500;
        padding: 4px 6px;
        border-radius: 8px;
        text-transform: capitalize;
      }
    }
  }
`;
