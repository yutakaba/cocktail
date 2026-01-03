import { styled } from '@linaria/react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export default function SearchInput({ value, onChange, placeholder }: Props) {
  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

const Input = styled.input`
  width: 50%;
  padding: 14px 24px;
  font-size: 16px;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  backdrop-filter: blur(12px);
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  }
`;
