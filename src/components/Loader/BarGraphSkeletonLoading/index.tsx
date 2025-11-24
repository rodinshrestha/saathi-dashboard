import styled, { keyframes } from "styled-components";

// Pulse animation
const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;

const Wrapper = styled.div`
  height: 600px;
  padding: 24px;
  background: ${({ theme }) => theme.color.skeletonBgColor.highContrast};
  border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

/* Vertical Y-axis line (left side) */
const YAxis = styled.div`
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  left: 1.5rem;
  width: 2px;
  background: ${({ theme }) => theme.color.skeletonBgColor.lowContrast};
`;

/* A horizontal bar skeleton */
const Bar = styled.div<{ width: string }>`
  /* height: 60px; */
  flex: 1;
  border-radius: 6px;
  background: #e5e7eb;
  width: ${({ width }) => width};
  margin-left: 1.5rem; /* position right of y-axis */
  animation: ${pulse} 1.4s infinite ease-in-out;
`;

export const BarGraphSkeletonLoading = () => {
  return (
    <Wrapper>
      <YAxis />
      <Bar width="40%" />
      <Bar width="65%" />
      <Bar width="55%" />
      <Bar width="80%" />
      <Bar width="20%" />
      <Bar width="25%" />
      <Bar width="44%" />
      <Bar width="33%" />
      <Bar width="47%" />
      <Bar width="55%" />
      <Bar width="61%" />
      <Bar width="88%" />
    </Wrapper>
  );
};
