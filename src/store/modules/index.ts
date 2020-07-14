import { combineReducers } from 'redux';
import counter, { CounteState } from './counter';

export interface RootState {
    counter: CounteState
}

export default combineReducers({
    counter,
})