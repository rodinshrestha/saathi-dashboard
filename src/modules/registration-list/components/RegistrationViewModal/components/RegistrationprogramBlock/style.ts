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

  .information-block-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .data-block-wrapper {
      flex: 1 1 calc(50% - 20px);
    }
  }
`;
