import {Action, AppState} from "./Types";

const defState:AppState = {
    firstName:'',
    secondName:'',
    date:'',
    email:'',
    admin:false,
    filmArray:[]
};


export function userReducer(state=defState,action:Action) {
    switch (action.type) {
        case "CLEAR_STORE":
            return {
                firstName:'',
                secondName:'',
                date:'',
                email:'',
                admin:false
            };
        case "PUSH_STATE":
            return {
                firstName : action.payload.firstName,
                secondName:action.payload.secondName,
                email:action.payload.email,
                date:action.payload.date,
                admin:action.payload.admin
            };
        default:
            return state
    }
}


export function filmReducer(state=defState,action:Action) {
    if (action.type === "SEND_FILM_DATA") {
        return {
            filmArray:action.payload,
            ...state
        };
    }
    return state
}