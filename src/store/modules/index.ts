import { combineReducers } from 'redux';
import counter, { CounteState } from './counter';
import waiting, { WaitingState } from './waiting';

export interface RootState {
    counter: CounteState;
    waiting: WaitingState;    
}

export default combineReducers({
    counter,
    waiting
})