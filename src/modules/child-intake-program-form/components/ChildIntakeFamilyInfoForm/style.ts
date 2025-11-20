"use client";

import styled from "styled-components";

export const StyledDiv = styled.div`
  .child-intake-family-information-form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    row-gap: 40px;
    height: 100%;
    .child-intake-family-sub-wrapper {
      border-bottom: 1px
        solid${({ theme }) => theme.color.borderColor.highContrast};
      padding-bottom: 40px;

      .form-sub-title {
        font-size: 14px;
        color: ${({ theme }) => theme.color.textColor.highContrast};
        font-weight: 400;
        margin-bottom: 15px;
      }

      .child-intake-family-info-sub-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        .input-field-wrapper {
          flex: 0 0 calc(50% - 20px);
        }
        .text-area-wrapper {
          flex: 0 0 100%;
        }

        .select-field-wrapper {
          flex: 0 0 calc(50% - 20px);
        }
      }
    }
  }
`;
