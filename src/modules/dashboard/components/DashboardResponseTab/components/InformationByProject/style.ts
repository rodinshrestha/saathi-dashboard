import styled from "styled-components";

export const StyledDiv = styled.div`
  &.loader-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  border: 1px solid ${({ theme }) => theme.color.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  padding: 24px;
  .information-project-title {
    font-size: 16px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
    margin-bottom: 40px;
  }

  .information-record-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .information-record-value {
      color: ${({ theme }) => theme.color.orange[100]};
      font-size: 36px;
    }

    .information-record-title {
      font-size: 14px;
      color: ${({ theme }) => theme.color.textColor.lowContrast};
      margin-top: 10px;
    }
  }

  .information-project-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 5px;
    margin-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};

    .information-project-content {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      background-color: color-mix(in oklab, var(--muted) 30%, transparent);

      .project-title {
        font-size: 14px;
        color: ${({ theme }) => theme.color.textColor.highContrast};
      }
      .project-value {
        font-size: 16px;
        color: ${({ theme }) => theme.color.orange["100"]};
        font-weight: 500;
      }
    }
  }

  .information-stats-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    padding: 10px 5px;
    border-top: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};

    .information-stats {
      flex: 0 0 calc(50% - 20px);
      padding: 8px;
      box-sizing: border-box;
      border-radius: 5px;

      &.information-stats-0 {
        background-color: oklch(0.97 0.014 254.604);
      }
      &.information-stats-1 {
        background-color: oklch(0.971 0.013 17.38);
      }
      &.information-stats-2 {
        background-color: oklch(0.987 0.022 95.277);
      }
      &.information-stats-3 {
        background-color: oklch(0.977 0.014 308.299);
      }

      .information-stats-title {
        font-size: 14px;
        color: ${({ theme }) => theme.color.textColor.lowContrast};
      }
      .information-stats-value {
        font-size: 18px;
        margin-top: 5px;

        &.information-value-0 {
          color: #3b82f6;
        }
        &.information-value-1 {
          color: #ef4444;
        }
        &.information-value-2 {
          color: #f59e0b;
        }
        &.information-value-3 {
          color: #8b5cf6;
        }
      }
    }
  }
`;
