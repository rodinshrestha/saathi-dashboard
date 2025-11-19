"use client";

import styled from "styled-components";

export const StyledDiv = styled.div`
  .shelter-support-form-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 40px;

    .input-field-wrapper {
      flex: 0 0 calc(50% - 20px);
    }

    .select-field-wrapper {
      flex: 0 0 calc(50% - 20px);
    }

    .checkbox-wrapper {
      flex: 0 0 100%;
    }
  }
`;
