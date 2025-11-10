import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .label-wrapper {
    color: ${({ theme }) => theme.color.textColor.lowContrast};
    font-size: 14px;
    display: flex;
    gap: 8px;
  }
  .value-wrapper {
    color: ${({ theme }) => theme.color.textColor.lowContrast};
    .data-content {
      font-size: 16px;
    }
  }
`;
