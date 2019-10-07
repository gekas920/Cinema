import {AppState, GetStateAction, SendStateAction} from "./Types";
import {createStore} from 'redux'

const defState:AppState = {
    firstName:'',
    secondName:'',
    date:'',
    email:''
};


function Reducer(state=defState,action:GetStateAction|SendStateAction) {
    if(action.type === 'PUSH_STATE'){
        return{
            firstName : action.payload.firstName,
            secondName:action.payload.secondName,
            email:action.payload.email,
            date:action.payload.date
        }
    }
    return state
}


export const store = createStore(Reducer);

