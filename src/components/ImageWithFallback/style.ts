import styled from "styled-components";

export const StyledDiv = styled.div`
  display: inline-flex;
  gap: 20px;
  img {
    cursor: pointer;
  }
  .image-magnifier-wrapper {
    height: 400px;
    width: 400px;
    border: 1px solid #ccc;
    overflow: hidden;
    left: 100%;
    top: -50%;
    position: absolute;
    pointer-events: none;
    z-index: 99999;
    background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};

    img {
      border-radius: unset !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
