import styled from "styled-components";

export const StyledDiv = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
  padding-top: 20px;
  margin-top: 20px;
  .information-block-title {
    font-size: 16px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
    font-weight: 400;
    margin-bottom: 15px;
  }

  .registration-document-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
