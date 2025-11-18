import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .error-title {
    font-size: 28px;
    color: ${({ theme }) => theme.color.red["100"]};
  }

  .error-code {
    font-size: 88px;
    color: ${({ theme }) => theme.color.red["100"]};
  }

  .btn-wrapper {
    margin-top: 20px;
  }
`;
