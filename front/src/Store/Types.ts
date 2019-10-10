
export interface AppState {
    firstName:string,
    secondName:string,
    date:string,
    email:string
}

const GET_STATE = 'GET_STATE';
const PUSH_STATE = 'PUSH_STATE';
const CLEAR_STATE = 'CLEAR_STORE';

interface GetStateAction {
    type: typeof GET_STATE
}

interface SendStateAction {
    type:typeof PUSH_STATE;
    payload:AppState
}

interface ClearStateAction {
    type: typeof CLEAR_STATE
}

export type Action = GetStateAction | SendStateAction | ClearStateAction;
