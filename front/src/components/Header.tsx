'use client';

import { styled } from '@linaria/react';

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>a</StyledTitle>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 100px;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.h1`
  color: #ffffff;
`;
