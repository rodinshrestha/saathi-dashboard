"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;

  .protection-tab-card-wrapper {
    display: flex;
    gap: 10px;

    .mini-card-wrapper {
      flex: 1;
    }
  }

  .two-graph-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-wrap: wrap;
    gap: 20px 15px;

    .flex-1 {
      flex: 0 0 calc(50% - 60px);
      min-width: 0;
      height: 400px;
      canvas {
        width: 100%;
      }
    }
  }
`;
