import { styled } from '@linaria/react';
import CocktailList from '@/src/components/CocktailList';
import { getCocktails } from '@lib/api';

export default async function TequilaPage() {
  const tequilaCocktails = await getCocktails('tequila');

  return (
    <MainContainer>
      <ContentWrapper>
        <Header>
          <Title>
            Tequila Based Cocktails
            <Subtitle>テキーラベースのカクテル一覧</Subtitle>
          </Title>
        </Header>

        <ListSection>
          <CocktailList cocktails={tequilaCocktails} />
        </ListSection>

        <FooterLink>
          <a href="/">← トップページへ戻る</a>
        </FooterLink>
      </ContentWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 3rem 1rem;
`;

const ContentWrapper = styled.div`
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #c7d2fe;
  padding-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 800;
  color: #111827;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.125rem;
  font-weight: 500;
  color: #4f46e5;
  margin-top: 0.5rem;
`;

const ListSection = styled.section`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
`;

const FooterLink = styled.div`
  margin-top: 2rem;
  text-align: center;

  a {
    color: #4f46e5;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: #6366f1;
    }
  }
`;
