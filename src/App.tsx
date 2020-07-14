import React from 'react';
import { WaitingList } from '~/components';
import { PaletteContainer, CounterContainer } from '~/containers';
const App:React.FC = () => {
    return (
      <div>
        <PaletteContainer/>
        <CounterContainer/>
        <WaitingList />
      </div>
    );
}

export default App;