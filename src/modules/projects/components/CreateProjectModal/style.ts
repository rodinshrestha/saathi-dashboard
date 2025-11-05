import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .project-modal-date-wrapper {
    display: flex;
    gap: 40px;

    .date-picker-wrapper {
      flex-grow: 1;
    }
  }

  .project-modal-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    gap: 20px;

    .project-modal-cancel-btn {
      color: ${({ theme }) => theme.color.textColor.highContrast};
    }
  }
`;
