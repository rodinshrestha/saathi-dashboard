import styled, { keyframes } from "styled-components";

// Pulse animation
const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;

// Wrapper
const ChartSkeletonWrapper = styled.div`
  height: 480px;
  min-width: 759px;
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.color.borderColor.highContrast};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
`;

// A single bar
const SkeletonBar = styled.div<{ height: string }>`
  flex: 1;
  border-radius: 6px;
  background: #e5e7eb;
  height: ${({ height }) => height};
  animation: ${pulse} 1.4s infinite ease-in-out;
`;

export const BarChartSkeletonLoading = () => {
  return (
    <ChartSkeletonWrapper>
      <SkeletonBar height="30%" />
      <SkeletonBar height="55%" />
      <SkeletonBar height="60%" />
      <SkeletonBar height="20%" />
      <SkeletonBar height="35%" />
      <SkeletonBar height="80%" />
    </ChartSkeletonWrapper>
  );
};
