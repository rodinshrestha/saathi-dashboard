import styled, { keyframes } from "styled-components";

const MiniCardSkeletonLoading = () => {
  return (
    <StyledDiv>
      <div className="skeleton-text-wrapper">
        <Skeleton w="40%" h="12px" mt="8px" />
        <Skeleton w="10%" h="35px" mt="8px" />
      </div>

      <div className="skeleton-image-wrapper">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
          />
        </svg>
      </div>
    </StyledDiv>
  );
};

export default MiniCardSkeletonLoading;

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.color.skeletonBgColor.highContrast};
  gap: 10px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.color.boxShadow};

  .skeleton-text-wrapper {
    flex: 1;
  }

  .skeleton-image-wrapper {
    height: 48px;
    width: 48px;
    background: var(--neutral-quaternary, #e5e7eb);
    border-radius: var(--rounded-base, 0.75rem);
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.color.skeletonBgColor.highContrast} 0px,
      #f5f5f5 80px,
      ${({ theme }) => theme.color.skeletonBgColor.highContrast} 160px
    );
    animation: ${shimmer} 10s infinite linear;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 24px;
      height: 24px;
      color: var(--fg-disabled, #9ca3af);
      opacity: 0.4;
    }
  }
`;

const Skeleton = styled.div<{
  w?: string;
  h?: string;
  r?: string;
  mt?: string;
}>`
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "16px"};
  margin-top: ${({ mt }) => mt || "0"};
  border-radius: ${({ r }) => r || "8px"};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.skeletonBgColor.highContrast} 0px,
    ${({ theme }) => theme.color.skeletonBgColor.lowContrast} 80px,
    ${({ theme }) => theme.color.skeletonBgColor.highContrast} 160px
  );
  background-size: 400px 100%;
  animation: ${shimmer} 1.6s infinite linear;
`;
