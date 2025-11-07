import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  .date-picker-label {
    margin-bottom: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
    display: block;
    font-weight: 500;
  }

  .react-datepicker-wrapper {
    width: 100%;

    .date-picker {
      box-sizing: border-box;
      border-radius: 8px;
      background-color: ${({ theme }) =>
        theme.color.backgroundColor.highContrast};
      padding: 8px 12px;
      font-size: 14px;
      border: 1px solid transparent;
      width: 100%;

      &:focus {
        border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
        outline: ${({ theme }) => theme.color.outlineColor.highContrast};
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;
