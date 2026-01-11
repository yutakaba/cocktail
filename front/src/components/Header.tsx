'use client';

import { styled } from '@linaria/react';
import headerImage from '../assets/headerImage.png';

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle style={{ '--hd-image': `url(${headerImage.src})` }}></StyledTitle>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;

const StyledTitle = styled.h1`
  background-image: var(--hd-image);
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
