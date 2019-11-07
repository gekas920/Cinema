import {createStore,combineReducers} from 'redux'
import {userReducer} from "./Redusers";
import {filmReducer} from "./Redusers";



export const store = createStore(combineReducers({
    user:userReducer,
    film:filmReducer
}));

