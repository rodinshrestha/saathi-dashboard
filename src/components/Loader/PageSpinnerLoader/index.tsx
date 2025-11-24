"use client";

import styled from "styled-components";

import { SpinnerLoader } from "../SpinnerLoader";

const PageSpinnerLoader = () => {
  return (
    <StyledDiv>
      <SpinnerLoader />
    </StyledDiv>
  );
};

export default PageSpinnerLoader;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
