import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
  border-radius: 8px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  .referal-summary-title {
    font-size: 16px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
    margin-bottom: 30px;
  }

  .referal-list-details-wrapper {
    display: flex;
    gap: 20px;

    &.horizontal {
      flex-direction: column;
    }

    &.vertical {
      justify-content: space-between;
    }

    .referal-list-content {
      flex: 1;
      &.divider {
        border-top: 1px solid
          ${({ theme }) => theme.color.borderColor.highContrast};
        padding-top: 20px;
      }
      .referral-title {
        font-size: 14px;
        color: ${({ theme }) => theme.color.textColor.lowContrast};
        margin-bottom: 20px;
      }

      .referal-list {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        .referal-sub-title {
          font-size: 16px;
          color: ${({ theme }) => theme.color.textColor.highContrast};
        }

        .referal-value {
          font-size: 16px;
          color: ${({ theme }) => theme.color.blue["100"]};
          &.orange-text {
            color: ${({ theme }) => theme.color.orange["100"]};
          }
        }
      }
    }
  }
`;
