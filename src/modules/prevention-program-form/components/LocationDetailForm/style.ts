"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  &.location-details-form-wrapper {
    .location-details-form-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      row-gap: 40px;

      .input-field-wrapper {
        flex: 0 0 calc(33.33% - 20px);
      }

      .select-field-wrapper {
        flex: 0 0 calc(33.33% - 20px);
      }
    }
  }
`;
