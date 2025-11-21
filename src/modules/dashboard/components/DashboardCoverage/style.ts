import styled from "styled-components";

export const StyledDiv = styled.div`
  &.loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  .dashboard-coverage-title {
    font-size: 16px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
    margin-bottom: 30px;
  }

  .province-coverage-list {
    display: flex;
    gap: 10px;

    .province-coverage-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: ${({ theme }) =>
        theme.color.backgroundColor.highContrast};
      border-radius: 8px;
      flex: 1;
      padding: 16px;

      .province-title {
        font-size: 14px;
        color: ${({ theme }) => theme.color.textColor.lowContrast};
      }
      .province-value {
        font-size: 24px;
        color: ${({ theme }) => theme.color.blue["100"]};
      }
    }
  }
`;
