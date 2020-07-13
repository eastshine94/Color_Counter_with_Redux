import React from 'react';
import { Counter, Palette, WaitingList } from './components';
const App:React.FC = () => {
    return (
      <div>
        <Palette selected="red" />
        <Counter value={0} color="red" />
        <WaitingList />
      </div>
    );
}

export default App;