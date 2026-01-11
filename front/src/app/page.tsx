'use client';

import * as React from 'react';
import { styled } from '@linaria/react';
import Card from '@/src/components/Card';
import SearchInput from '@/src/components/SearchInput';
import bgImage from '../assets/backgroundImage.png';

export default function Home() {
  const [query, setQuery] = React.useState('');

  return (
    <Main style={{ '--bg-image': `url(${bgImage.src})` }}>
      <SearchWrapper>
        <SearchInput value={query} onChange={setQuery} placeholder="🔍 カクテルを検索" />
      </SearchWrapper>
      <CardContainer>
        <Card title="vodka" href="/base/vodka" />
        <Card title="gin" href="/base/gin" />
        <Card title="tequila" href="/base/tequila" />
        <Card title="brandy" href="/base/brandy" />
        <Card title="rum" href="/base/rum" />
        <Card title="whiskey" href="/base/whiskey" />
        <Card title="liqueur" href="/base/liqueur" />
        <Card title="wine" href="/base/wine" />
        <Card title="beer" href="/base/beer" />
        <Card title="sake" href="/base/sake" />
        <Card title="nonAlcoholic" href="/base/non-alcoholic" />
      </CardContainer>
    </Main>
  );
}

const Main = styled.div`
  min-height: 170vh;
  background-image: var(--bg-image);
  background-size: 100% auto;
  background-position: center top;
  background-position-y: 100px;
  background-repeat: no-repeat;
  background-attachment: scroll;
  padding-top: calc(100px + 40px);
  padding-left: 20px;
  padding-right: 20px;
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
