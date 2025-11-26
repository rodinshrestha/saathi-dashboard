import styled from "styled-components";

export const StyledDiv = styled.div`
  .loader-wrapper {
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .review-details-wrapper {
    padding: 10px;
    background-color: ${({ theme }) =>
      theme.color.backgroundColor.highContrast};
    border-radius: 8px;
    display: flex;
    gap: 20px;

    .review-detail-avatar-wrapper {
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

    .review-personal-details-content {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .review-personal-name-content {
        font-size: 18px;
        font-weight: 400;
        color: ${({ theme }) => theme.color.textColor.highContrast};
      }
      .review-personal-id-content {
        font-size: 14px;
        color: ${({ theme }) => theme.color.textColor.lowContrast};
      }
      .review-personal-program-wrapper {
        display: flex;
        gap: 5px;

        .review-personal-program {
          font-size: 12px;
          border: 1px solid
            ${({ theme }) => theme.color.borderColor.highContrast};
          font-weight: 500;
          padding: 4px 6px;
          border-radius: 8px;
        }
      }
    }
  }
  .approval-tab-wrapper {
    margin-top: 30px;
  }

  .approval-btn-wrapper {
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    .btn {
      display: flex;
      align-items: center;
      font-weight: 400;
      cursor: pointer;
      svg {
        margin-right: 10px;
      }
    }

    .approve-btn {
      background-color: oklch(0.627 0.194 149.214);
      border-color: oklch(0.627 0.194 149.214);

      &:hover {
        background-color: ${({ theme }) => theme.color.green["200"]};
        border-color: ${({ theme }) => theme.color.green["200"]};
      }
    }

    .send-back-btn {
      color: ${({ theme }) => theme.color.orange["100"]};
    }
  }
`;
