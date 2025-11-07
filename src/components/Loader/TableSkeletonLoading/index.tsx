import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const StyledBody = styled.tbody`
  tr {
    background-color: transparent !important;
  }
  td {
    height: 40px;
    padding: 0 8px;
  }
`;
const SkeletonCell = styled.div`
  height: 10px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.skeletonBgColor.highContrast} 25%,
    ${({ theme }) => theme.color.skeletonBgColor.lowContrast} 50%,
    ${({ theme }) => theme.color.skeletonBgColor.lowContrast} 75%
  );
  background-size: 200%;
  animation: ${shimmer} 4s infinite linear;
`;

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({
  rows = 4,
  columns = 6,
}) => {
  return (
    <StyledBody>
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <tr key={rowIdx}>
          {Array.from({ length: columns }).map((_, colIdx) => (
            <td key={colIdx}>
              <SkeletonCell />
            </td>
          ))}
        </tr>
      ))}
    </StyledBody>
  );
};

export default TableSkeleton;
