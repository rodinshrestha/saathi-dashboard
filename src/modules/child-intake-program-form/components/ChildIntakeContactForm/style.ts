"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  .child-intake-contact-form-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    row-gap: 40px;
    height: 100%;
    .child-intake-contact-sub-wrapper {
      border-bottom: 1px
        solid${({ theme }) => theme.color.borderColor.highContrast};
      padding-bottom: 40px;

      .form-sub-title {
        font-size: 14px;
        color: ${({ theme }) => theme.color.textColor.highContrast};
        font-weight: 400;
        margin-bottom: 15px;
      }

      .child-intake-contact-sub-form-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
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
  }
`;
