import {Dispatch} from 'redux'
import {FilmInfo} from "./InterfacesMain";

export const mapDispatchToProps = (dispatch:Dispatch)=> ({
   sendFilmsData:(payload:FilmInfo)=>{
       dispatch({
           type:'SEND_FILM_DATA',
           payload:payload
       })
   }
});

export const mapStateToProps = ()=>{
    return {}
};