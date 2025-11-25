import React from "react";

import styled from "styled-components";

type Props = {
  checked: boolean;
  onChange: () => void;
};

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleTrack = styled.div<{ checked: boolean }>`
  width: 48px;
  height: 24px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.color.blue["100"] : "#ccc"};
  border-radius: 24px;
  position: relative;
  transition: background-color 0.25s ease;
`;

const ToggleThumb = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? "26px" : "2px")};
  transition: left 0.25s ease;
`;

const Toggle: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <ToggleWrapper onClick={onChange}>
      <ToggleTrack checked={checked}>
        <ToggleThumb checked={checked} />
      </ToggleTrack>
    </ToggleWrapper>
  );
};

export default Toggle;
