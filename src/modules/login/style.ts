"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundColor};
  height: 100vh;
  width: 100%;

  .login-wrapper {
    width: 448px;
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    box-shadow: ${({ theme }) => theme.color.boxShadow};
    background-color: ${({ theme }) => theme.color.white["100"]};
    height: 600px;
    padding: 24px;

    .login-logo-wrapper {
      position: relative;
      width: 90px;
      height: 120px;
    }

    .login-title-wrapper {
      text-align: center;
      margin-bottom: 60px;
    }

    .login-form-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
