import React from 'react';
import styled from 'styled-components';

interface Props {
  value: number;
  color: string;
  onIncrement?(): void;
  onDecrement?(): void;
}

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 1rem;
  width: 19rem;
  & h1 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const Counter:React.FC<Props> = ({ value, color, onIncrement, onDecrement }) => {
  return (
    <Wrapper>
      <h1 style={{ color }}>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </Wrapper>
  );
};

export default Counter;
