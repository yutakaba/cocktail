'use client'

import * as React from 'react'
import { styled } from '@linaria/react'
import Card from '@/src/components/Card'
import SearchInput from '@/src/components/SearchInput'
import bgImage from '../assets/backgroundImage.png'

export default function Home() {
  const [query, setQuery] = React.useState('');

  return (
    <Main style={{ '--bg-image': `url(${bgImage.src})` }}>
      <SearchWrapper>
        <SearchInput 
          value={query}
          onChange={setQuery}
          placeholder="🔍 カクテルを検索"
        />
      </SearchWrapper>
      <CardContainer>
        <Card
          title="vodka"
          href="/vodka"
        />
        <Card
          title="gin"
          href="/gin"
        />
        <Card
          title="tequila"
          href="/tequila"
        />
        <Card
          title="brandy"
          href="/brandy"
        />
        <Card
          title="rum"
          href="/rum"
        />
        <Card
          title="whiskey"
          href="/whiskey"
        />
        <Card
          title="liqueur"
          href="/liqueur"
        />
        <Card
          title="wine"
          href="/wine"
        />
        <Card
          title="beer"
          href="/beer"
        />
        <Card
          title="sake"
          href="/sake"
        />
        <Card
          title="nonAlcoholic"
          href="/non-alcoholic"          
        />
      </CardContainer>
    </Main>
  );
}

const Main = styled.div`
  min-height: 100vh;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const SEARCH_WIDTH = '600px';
const SearchWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 12px;
  width: 100%;
  max-width: ${SEARCH_WIDTH}; 
  padding: 12px 0;
`;
