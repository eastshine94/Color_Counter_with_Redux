const CHANGE_INPUT = 'waiting/CHANGE_INPUT';
const CREATE = 'waiting/CREATE';
const ENTER = 'waiting/ENTER';
const LEAVE = 'waiting/LEAVE';

export interface ChangeInputAction {
    type: typeof CHANGE_INPUT;
    payload: string;
}
export interface CreateAction {
    type: typeof CREATE;
    payload: { id: number };
}
export interface EnterAction {
    type: typeof ENTER;
    payload: number;
}
export interface LeaveAction {
    type: typeof LEAVE;
    payload: number;
}

let id = 3;
export const changeInput = (text: string): ChangeInputAction => ({ type: CHANGE_INPUT, payload: text});
export const create = (): CreateAction => ({type: CREATE, payload: { id: id++ }});
export const enter = (id: number): EnterAction => ({type: ENTER, payload: id});
export const leave = (id: number): LeaveAction => ({type: LEAVE, payload: id});

export type WatingActionTypes = ChangeInputAction|CreateAction|EnterAction|LeaveAction;
export const actionCreators = {
    changeInput,
    create,
    enter,
    leave
  };
// 초기 상태 정의
export interface Waiting {
    id: number;
    name: string;
    entered: boolean;
}

export interface WaitingState {
    input: string;
    list: Array<Waiting>
}

export const initialState: WaitingState = {
    input: '',
    list: [
        {
          id: 0,
          name: '홍길동',
          entered: true,
        },
        {
          id: 1,
          name: '콩쥐',
          entered: false,
        },
        {
          id: 2,
          name: '팥쥐',
          entered: false,
        },
    ],
}

export default function waiting( state = initialState, action: WatingActionTypes){
    switch(action.type){
        case CHANGE_INPUT: 
            return{
                ...state,
                input: action.payload
            }
        case CREATE:
            return{
                ...state,
                list: state.list.concat({
                    id: action.payload.id,
                    name: state.input,
                    entered: false,
                })
            }
        case ENTER:
            return{
                ...state,
                list: state.list.map(
                    item => item.id === action.payload
                    ?{...item, entered: !item.entered} : item
                ),
            }
        case LEAVE:
            return{
                ...state,
                list: state.list.filter(item => item.id !== action.payload),
            }
        default: 
            return state;
    }
}