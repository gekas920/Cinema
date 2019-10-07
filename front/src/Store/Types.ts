
export interface AppState {
    firstName:string,
    secondName:string,
    date:string,
    email:string
}

const GET_STATE = 'GET_STATE';
const PUSH_STATE = 'PUSH_STATE';

export interface GetStateAction {
    type: typeof GET_STATE
}

export interface SendStateAction {
    type:typeof PUSH_STATE;
    payload:AppState
}

