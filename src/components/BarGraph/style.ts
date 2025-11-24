import styled from "styled-components";

export const StyledDiv = styled.div`
  .bar-graph-title {
    font-size: 16px;
    color: ${({ theme }) => theme.color.textColor.highContrast};
    margin-bottom: 40px;
  }

  height: 600px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
  background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  min-width: 0;
  canvas {
    width: 100% !important;
    min-width: 0 !important;
    display: block;
    height: 550px !important;
  }
`;
