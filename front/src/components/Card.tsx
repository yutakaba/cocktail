'use client';

import { styled } from '@linaria/react'
import Link from 'next/link'

type Props = {
  title: string
  href: string
};

export default function Card({ title, href }: Props) {
  return (
    <Link href={href} passHref>
      <StyledCard>
        <StyledTitle>{title}</StyledTitle>
      </StyledCard>
    </Link>
  )
}

const StyledCard = styled.div`
  background-color: #2B2D6E;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(120, 120, 120, 0.1);
  height: 40px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  background: linear-gradient(
    90deg, 
    #2B2D6E 0%,
    #4347a3 50%,
    #2B2D6E 100%
  );
  background-size: 200% 100%;
  border: none;
  transition: background-position 0.6s ease;

  &:hover {
    background-position: 100% 0;
  }
`;

const StyledTitle = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin: 0;
  font-weight: bold;
`;
