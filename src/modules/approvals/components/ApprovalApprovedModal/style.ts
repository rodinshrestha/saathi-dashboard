import styled from "styled-components";

export const StyledDiv = styled.div`
  .approve-registration-content {
    font-size: 14px;
    color: ${({ theme }) => theme.color.textColor.lowContrast};
    line-height: 20px;
  }

  .approve-registration-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 30px;

    .approve-btn {
      background-color: ${({ theme }) => theme.color.green["400"]};
      border: 1px solid ${({ theme }) => theme.color.green["400"]};

      &:hover {
        background-color: ${({ theme }) => theme.color.green["300"]};
        border: 1px solid ${({ theme }) => theme.color.green["300"]};
      }
    }
  }
`;
