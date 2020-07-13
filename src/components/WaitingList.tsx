import React from 'react';
import styled from 'styled-components';


interface WaitingItemProps {
  text: string; 
  entered?: boolean;
  onEnter?(): void;
  onLeave?(): void;
}

const WaitingListWrapper = styled.div`
  margin-top: 1rem;
  border: 1px solid black;
  width: 19rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  & h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  & form {
    display: flex;
    & input {
      flex: 1;
      font-size: 1.25rem;
    }
    & button{
      font-size: 1.25rem;
      padding: 0.5rem;
    }
  }

  & ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    & li {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;
      border: 1px solid black;

      & + & {
        border-top: none;
      }
      &.text {
        flex: 1;
        &.entered {
          text-decoration: line-through;
          color: gray;
        }
      }
    }
  }
`; 


const WaitingItem: React.FC<WaitingItemProps> = ({ text, entered, onEnter, onLeave }) => {
  return (
    <li>
      <div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
      <div className="buttons">
        <button onClick={onEnter}>입장</button>
        <button onClick={onLeave}>나감</button>
      </div>
    </li>
  );
};

const WaitingList:React.FC = () => {
  return (
    <WaitingListWrapper>
      <h2>대기자 명단</h2>
      <form>
        <input />
        <button>등록</button>
      </form>
      <ul>
        <WaitingItem text="홍길동" entered />
        <WaitingItem text="콩쥐" />
        <WaitingItem text="팥쥐" />
      </ul>
    </WaitingListWrapper>
  );
};

export default WaitingList;
