import React from "react";

import styled from "styled-components";

interface CircleProgressProps {
  progress: number; // 0 - 100
  size?: number; // circle size in px
  strokeWidth?: number;
}

const Wrapper = styled.div<{ size: number }>`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const Percentage = styled.div<{ size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: ${(props) => props.size * 0.25}px;
`;

const CircleProgress: React.FC<CircleProgressProps> = ({
  progress,
  size = 35,
  strokeWidth = 3,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Wrapper size={size}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3A86FF"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <Percentage size={size}>{Math.round(progress)}%</Percentage>
    </Wrapper>
  );
};

export default CircleProgress;
