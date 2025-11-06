import styled from "styled-components";

export const StyledDiv = styled.div`
  .delete-project-content {
    font-size: 14px;
    color: ${({ theme }) => theme.color.textColor.lowContrast};
    line-height: 24px;
  }

  .delete-project-btn-wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    .project-delete-btn {
      background-color: ${({ theme }) => theme.color.orange[200]};
      border-color: ${({ theme }) => theme.color.orange[200]};
    }
  }
`;
