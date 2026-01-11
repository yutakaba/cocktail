'use client';

import { styled } from '@linaria/react';
import Link from 'next/link';

const QUIZ_LIST = [
  {
    id: 'cocktail-making',
    title: 'カクテル調理クイズ',
    description: 'グラス選びから工程まで。正しい手順でカクテルを完成させよう！',
    href: '/quiz/cocktail',
    icon: '🍸',
    color: 'linear-gradient(135deg, #2B2D6E 0%, #4347a3 100%)',
  },
]

export default function QuizMenuPage() {
  return (
    <Container>
      <Title>クイズに挑戦</Title>
      <MenuGrid>
        {QUIZ_LIST.map((quiz) => (
          <Link href={quiz.href} key={quiz.id} style={{ textDecoration: 'none' }}>
            <QuizCard style={{ '--card-bg': quiz.color } as any}>
              <Icon>{quiz.icon}</Icon>
              <CardContent>
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>{quiz.description}</CardDescription>
              </CardContent>
            </QuizCard>
          </Link>
        ))}
      </MenuGrid>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 80px 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 40px;
  font-size: 32px;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const QuizCard = styled.div`
  background: var(--card-bg);
  border-radius: 24px;
  padding: 32px;
  height: 200px;
  display: flex;
  align-items: center;
  gap: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const Icon = styled.div`
  font-size: 64px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardTitle = styled.h2`
  color: white;
  margin: 0;
  font-size: 24px;
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`;