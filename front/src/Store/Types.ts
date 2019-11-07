import {FilmInfo} from "../Main/InterfacesMain";

export interface AppState {
    firstName:string,
    secondName:string,
    date:string,
    email:string,
    admin:boolean,
    filmArray?:FilmInfo[]
}


const GET_STATE = 'GET_STATE';
const PUSH_STATE = 'PUSH_STATE';
const CLEAR_STATE = 'CLEAR_STORE';
const SEND_FILM_DATA = 'SEND_FILM_DATA';

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

interface SendFilmData {
    type: typeof SEND_FILM_DATA
    payload:FilmInfo[]
}

export type Action = GetStateAction | SendStateAction | ClearStateAction | SendFilmData;
