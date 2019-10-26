import {Action, AppState} from "./Types";
import {createStore} from 'redux'

const defState:AppState = {
    firstName:'',
    secondName:'',
    date:'',
    email:'',
    admin:false
};


function Reducer(state=defState,action:Action) {
    if(action.type === 'PUSH_STATE'){
        return{
            firstName : action.payload.firstName,
            secondName:action.payload.secondName,
            email:action.payload.email,
            date:action.payload.date,
            admin:action.payload.admin
        }
    }

    if(action.type === 'CLEAR_STORE'){
        return defState
    }
    return state
}


export const store = createStore(Reducer);

