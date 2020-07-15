import React from 'react';
import { PaletteContainer, CounterContainer, WaitingListContainer } from '~/containers';
const App:React.FC = () => {
    return (
      <div>
        <PaletteContainer/>
        <CounterContainer/>
        <WaitingListContainer />
      </div>
    );
}

export default App;