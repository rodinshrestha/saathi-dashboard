import styled from "styled-components";

export const StyledDiv = styled.div`
  .cancel-registration-content {
    font-size: 14px;
    color: ${({ theme }) => theme.color.textColor.lowContrast};
    line-height: 20px;
  }

  .cancel-registration-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 30px;

    .cancel-btn {
      background-color: ${({ theme }) => theme.color.orange["100"]};
      border: 1px solid ${({ theme }) => theme.color.orange["100"]};

      &:hover {
        background-color: ${({ theme }) => theme.color.orange["100"]};
        border: 1px solid ${({ theme }) => theme.color.orange["100"]};
      }
    }
  }
`;
