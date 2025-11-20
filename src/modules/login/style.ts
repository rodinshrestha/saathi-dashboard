"use client";
import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundColor.highContrast};
  height: 100vh;
  width: 100%;

  .login-wrapper {
    width: 448px;
    border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
    box-shadow: ${({ theme }) => theme.color.boxShadow};
    background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
    height: 600px;
    padding: 24px;
    border-radius: 8px;

    .login-logo-wrapper {
      position: relative;
      width: 300px;
      height: 150px;
      margin: 0 auto;
    }

    .login-title-wrapper {
      text-align: center;
      margin-bottom: 60px;
      margin-top: 50px;
    }

    .login-form-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .login-btn {
      margin-top: 10px;
    }
  }
`;
