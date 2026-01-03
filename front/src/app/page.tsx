import { styled } from '@linaria/react';
import Card from '@/src/components/Card';
import bgImage from '../assets/backgroundImage.png';

export default function Home() {
  return (
    <Main style={{ '--bg-image': `url(${bgImage.src})` }}>
      <CardContainer>
        <Card
          title="ウォッカベース"
          description="ここは説明です"
          image="https://placehold.co"
          href="/vodka"
          tips="ここはヒントです"
        />
        <Card
          title="ジンベース"
          description="ここは説明です"
          image="https://placehold.co"
          href="/gin"
          tips="ここはヒントです"
        />
        <Card
          title="テキーラベース"
          description="ここは説明です"
          image="https://placehold.co"
          href="/tequila"
          tips="ここはヒントです"
        />
        <Card
          title="ブランデーベース"
          description="ここは説明です"
          image="https://placehold.co"
          href="/brandy"
          tips="ここはヒントです"
        />
        <Card
          title="ラムベース"
          description="ここは説明です"
          image="https://placehold.co"
          href="/rum"
          tips="ここはヒントです"
        />
        <Card
          title="ウィスキーベース"
          description="ここは説明です"
          image="https://placehold.co"
          href="/whiskey"
          tips="ここはヒントです"
        />
        <Card
          title="リキュールーベース"
          description="ここは説明です"
          image="https://placehold.co"
          href="/liqueur"
          tips="ここはヒントです"
        />
        <Card
          title="ワインベース"
          description="ここは説明です"
          image="https://placehold.co"
          href="/wine"
          tips="ここはヒントです"
        />
        <Card
          title="ビールベース"
          description="ここは説明です"
          image="https://placehold.co"
          href="/beer"
          tips="ここはヒントです"
        />
        <Card
          title="日本酒ベース"
          description="ここは説明です"
          image="https://placehold.co"
          href="/sake"
          tips="ここはヒントです"
        />
        <Card
          title="ノンアルコール"
          description="ここは説明です"
          image="https://placehold.co"
          href="/non-alcoholic"
          tips="ここはヒントです"
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
  padding: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  padding: 24px;
`;

