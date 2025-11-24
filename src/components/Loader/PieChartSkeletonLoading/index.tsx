import styled, { keyframes } from "styled-components";

// pulsing animation
const pulse = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
`;

const DoughnutSkeletonWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 324px; /* adjust size */
  height: 200px;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.color.skeletonBgColor.highContrast}; /* skeleton base color */
  position: relative;
  overflow: hidden;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const InnerCircle = styled.div`
  width: 60%; /* controls thickness of doughnut */
  height: 60%;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.color.skeletonBgColor
      .lowContrast}; /* matches background to create hollow effect */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledDiv = styled.div`
  min-width: 759px;
  width: 100%;
  min-height: 450px;
  background-color: ${({ theme }) => theme.color.backgroundColor.lowContrast};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => theme.color.borderColor.highContrast};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  border-radius: 8px;
  padding: 0 24px;
  box-sizing: border-box;
  flex: 1;
`;

type DoughnutSkeletonProps = {
  size?: number; // optional size
  thickness?: number; // optional thickness ratio
};

const PieChartSkeletonLoading = ({
  size = 320,
  thickness = 0.6,
}: DoughnutSkeletonProps) => {
  return (
    <StyledDiv>
      <DoughnutSkeletonWrapper style={{ width: size, height: size }}>
        <InnerCircle
          style={{ width: size * thickness, height: size * thickness }}
        />
      </DoughnutSkeletonWrapper>
    </StyledDiv>
  );
};
export default PieChartSkeletonLoading;
