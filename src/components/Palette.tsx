import React from 'react';
import styled from 'styled-components';

interface PaletteItemProps {
  color: string;
  active: boolean;
  onClick?(): void;
}

interface PaletteProps {
  selected: string;
  onSelect(color: string) : void;
}

const PaletteWrapper = styled.div`
  background: black;
  color: white;
  padding: 1rem;
  display: inline-flex;
  flex-direction: column;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const ColorsWrapper = styled.div`
  display: flex;
`;

interface StyledProps {
  active: boolean;
}
const PaletteItemWrapper = styled.div.attrs((props: StyledProps) => ({
  active: props.active || false,
}))`
  border-radius: 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  border: 2px solid white;
  opacity: ${props => props.active ? 1 : 0.7 };
  &:hover{
    opacity: 0.9;
  }
  & + & {
    margin-left: 0.5rem;
  }
`;




const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const PaletteItem:React.FC<PaletteItemProps> = ({ color, active, onClick }) => {
  return (
    <PaletteItemWrapper
      active= {active}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
};

const Palette:React.FC<PaletteProps> = ({ selected, onSelect }) => {
  return (
    <PaletteWrapper>
      <h2>색깔을 골라골라</h2>
      <ColorsWrapper>
        {colors.map(color => (
          <PaletteItem color={color} 
          key={color} 
          active={selected === color} 
          onClick={() => onSelect(color)}
          />
        ))}
      </ColorsWrapper>
    </PaletteWrapper>
  );
};

export default Palette;
