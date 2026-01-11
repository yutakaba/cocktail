'use client';

import React, { useState } from 'react';
import { styled } from '@linaria/react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Step = {
  id: string;
  text: string;
};

function SortableItem({ id, text }: Step) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <ItemCard ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <DragHandle>⠿</DragHandle>
      {text}
    </ItemCard>
  );
}

// --- メインページコンポーネント ---
export default function CocktailQuizPage() {
  const [glass, setGlass] = useState<string | null>(null);
  const [steps, setSteps] = useState<Step[]>([
    { id: '1', text: 'シェイカーに氷を入れる' },
    { id: '2', text: '材料を注ぐ' },
    { id: '3', text: 'シェイクする' },
    { id: '4', text: 'グラスに注ぐ' },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSteps((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Container>
      <Title>ジントニックを作ろう！</Title>

      <Section>
        <SectionTitle>1. グラスを選んでください</SectionTitle>
        <GlassGrid>
          {['コリンズグラス', 'カクテルグラス', 'ロックグラス'].map((g) => (
            <GlassOption key={g} active={glass === g} onClick={() => setGlass(g)}>
              {g === 'コリンズグラス' ? '🥛' : g === 'カクテルグラス' ? '🍸' : '🥃'}
              <p>{g}</p>
            </GlassOption>
          ))}
        </GlassGrid>
      </Section>

      <Section>
        <SectionTitle>2. 手順を正しい順番に並び替えてください</SectionTitle>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={steps} strategy={verticalListSortingStrategy}>
            <ListContainer>
              {steps.map((step) => (
                <SortableItem key={step.id} id={step.id} text={step.text} />
              ))}
            </ListContainer>
          </SortableContext>
        </DndContext>
      </Section>

      <SubmitButton onClick={() => alert('判定ロジックをここに書きます')}>完成！</SubmitButton>
    </Container>
  );
}

// --- スタイル定義 ---
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 20px;
  color: white;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const Section = styled.section`
  background: rgba(255, 255, 255, 0.05);
  padding: 24px;
  border-radius: 20px;
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  color: #ffb347;
`;

const GlassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const GlassOption = styled.div<{ active: boolean }>`
  background: ${(props) => (props.active ? 'rgba(255, 179, 71, 0.2)' : 'rgba(255, 255, 255, 0.1)')};
  border: 2px solid ${(props) => (props.active ? '#ffb347' : 'transparent')};
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 32px;
  p {
    font-size: 12px;
    margin-top: 8px;
    color: white;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ItemCard = styled.div`
  background: #2b2d6e;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const DragHandle = styled.span`
  color: rgba(255, 255, 255, 0.3);
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(90deg, #ff701e, #ffbf30);
  color: white;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
`;
