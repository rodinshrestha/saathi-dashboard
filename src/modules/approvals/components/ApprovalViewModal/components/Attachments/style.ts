import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  &.empty-attachment-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;
