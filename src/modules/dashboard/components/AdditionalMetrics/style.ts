import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  .additional-metrix-title {
    font-size: 16px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
    margin-bottom: 40px;
  }

  .additional-data-metrix-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &.divider {
      margin-top: 20px;
      border-top: 1px solid
        ${({ theme }) => theme.color.borderColor.highContrast};
      padding-top: 20px;
    }
    &.green {
      .additional-data-metrix-value {
        color: ${({ theme }) => theme.color.green["100"]} !important;
      }
    }
    .additional-data-metrix-title {
      color: ${({ theme }) => theme.color.textColor.lowContrast};
      font-size: 14px;
    }
    .additional-data-metrix-value {
      font-size: 36px;
      color: ${({ theme }) => theme.color.orange["100"]};
    }
  }
`;
