import React from 'react';
import Image from 'next/image';
import { styled } from '@linaria/react';
import { Cocktail } from '@/src/types/cocktail';

const CocktailListItem: React.FC<{ cocktail: Cocktail }> = ({ cocktail }) => {
  const hasDetails = cocktail.ingredients && cocktail.ingredients.length > 0 && cocktail.method;

  return (
    <ListItem>
      {cocktail.imageUrl && (
        <ImageWrapper>
          <Image
            src={cocktail.imageUrl}
            alt={cocktail.name}
            fill
            sizes="64px"
            className="object-cover rounded-full"
          />
        </ImageWrapper>
      )}

      <div>
        <CocktailName>{cocktail.name}</CocktailName>
        {hasDetails ? (
          <DetailText>
            ベース: {cocktail.base} / 製法: {cocktail.method}
          </DetailText>
        ) : (
          <DetailText isError>詳細情報は現在表示できません (APIからの情報不足)</DetailText>
        )}
      </div>
    </ListItem>
  );
};

interface CocktailListProps {
  cocktails: Cocktail[];
}

const CocktailList: React.FC<CocktailListProps> = ({ cocktails }) => {
  if (!cocktails || cocktails.length === 0) {
    return <p style={{ color: '#4b5563', padding: '2rem' }}>カクテルが見つかりませんでした。</p>;
  }

  return (
    <ListContainer>
      {cocktails.map((cocktail) => (
        <CocktailListItem key={cocktail.id} cocktail={cocktail} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  max-width: 48rem;
  margin: 1rem auto 0;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  list-style: none;
  padding: 0;

  li:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  position: relative;
`;

const CocktailName = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #4338ca;
  margin: 0;
`;

const DetailText = styled.p<{ isError?: boolean }>`
  font-size: 0.875rem;
  color: ${(props) => (props.isError ? '#ef4444' : '#6b7280')};
  margin: 0.25rem 0 0;
`;

export default CocktailList;
