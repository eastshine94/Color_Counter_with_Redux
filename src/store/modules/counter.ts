// 액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성함수 정의
export interface ChangeColorAction {
    type: typeof CHANGE_COLOR;
    payload: string;
}
export const changeColor = (color:string): ChangeColorAction => ({ type: CHANGE_COLOR, payload: color});

export interface IncrementAction {
    type: typeof INCREMENT;
}
export const increment = ():IncrementAction => ({ type: INCREMENT});

export interface DecrementAction {
    type: typeof DECREMENT;
}
export const decrement = ():DecrementAction => ({type: DECREMENT});

export type CounterActionTypes = ChangeColorAction|IncrementAction|DecrementAction

export const actionCreators = {
    changeColor,
    increment,
    decrement
};

// 초기 상태 정의
export interface CounteState {
    color: string,
    number: number,
}

const initialState: CounteState = {
    color: 'red',
    number: 0,
};

// 리듀서 작성
export default function counter( state = initialState, action:CounterActionTypes){
    switch (action.type){
        case CHANGE_COLOR:
            return{
                ...state,
                color: action.payload,
            };
        case INCREMENT: 
            return{
                ...state,
                number: state.number + 1,
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            };
        default:
            return state;
    }
}