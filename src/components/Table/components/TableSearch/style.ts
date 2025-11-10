import styled from "styled-components";

export const StyledDiv = styled.div`
  border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
  display: flex;
  border-radius: 8px;
  justify-content: center;
  padding: 8px;
  gap: 10px;
  background-color: ${({ theme }) => theme.color.backgroundColor.highContrast};
  width: 256px;
  .table-search-icon {
    display: flex;
    align-items: center;
    align-self: center;
    color: ${({ theme }) => theme.color.textColor.highContrast};
  }
  input {
    border: none;
    font-size: 14px;
    background-color: transparent;
    outline: none;
    width: 100%;
  }
`;
