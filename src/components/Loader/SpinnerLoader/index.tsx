import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #e0e0e0;
  border-top-color: ${({ theme }) => theme.color.textColor.highContrast};
  border-radius: 50%;
  animation: ${spin} 0.9s linear infinite;
`;

export const SpinnerLoader = () => <Spinner />;
