"use client";
import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.text.highContrast};
  background-color: ${({ theme }) => theme.color.backgroundColor.highContrast};
`;
