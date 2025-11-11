"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  &.project-profile-form-wrapper {
    .project-form-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      row-gap: 40px;

      .input-field-wrapper {
        flex: 0 0 calc(50% - 20px);
      }
      .date-picker-wrapper {
        flex: 0 0 calc(50% - 20px);
      }

      .select-field-wrapper {
        flex: 0 0 calc(50% - 20px);
      }
    }
  }
`;
