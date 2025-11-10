import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;

  .data-block-wrapper {
    flex: 1 1 calc(50% - 22px);

    &.full-width {
      flex: 1 1 100%;
    }
  }
`;
