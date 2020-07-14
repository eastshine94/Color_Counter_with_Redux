import React from 'react';
import { Counter, WaitingList } from '~/components';
import { PaletteContainer } from '~/containers';
const App:React.FC = () => {
    return (
      <div>
        <PaletteContainer/>
        <Counter value={0} color="red" />
        <WaitingList />
      </div>
    );
}

export default App;