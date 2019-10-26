import React from "react";
import BasicRequests from "../Requests/Requests";
import * as CryptoJS from "crypto-js";
import {connect} from "react-redux";
import {AppState} from "../Store/Types";
import './Home.sass'

interface IState {
    firstName:string,
    secondName:string,
    date:string,
    email:string,
}

interface IProps {
    clearStore:any,
    sendData:any
}

class UserInfo extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            firstName:'',
            secondName:'',
            date:'',
            email:''
        }
    }
    componentDidMount(): void {
        BasicRequests.securedGet('/getInfo')
            .then(result=>{
                if(result && result.data){
                    let name = CryptoJS.AES.encrypt(result.data.firstName,'firstName');
                    localStorage.setItem('data',name.toString());
                    this.props.sendData(result.data);
                    this.setState({
                        firstName:result.data.firstName,
                        secondName:result.data.secondName,
                        date:new Date(result.data.date).toDateString(),
                        email:result.data.email
                    });
                }
                else {
                    this.handleClick();
                }
            });
    }

    handleClick = ()=>{
        localStorage.clear();
        this.props.clearStore();
        window.location.href = '/home';
    };
    inpFunc = (correctLabel:string,value:string)=>{
        return(
            <div className="group">
                <input className='input-home' value={value} readOnly/>
                <span className="bar"></span>
                <label className='label-home'>{correctLabel}</label>
            </div>
        )
    };
    render(){
        return(
            <div className='home-content'>
                <h1>User Info</h1>
                {this.inpFunc('first name',this.state.firstName)}
                {this.inpFunc('second name',this.state.secondName)}
                {this.inpFunc('email',this.state.email)}
                {this.inpFunc('date',this.state.date)}
                <button className='home--button' onClick={this.handleClick}>Log out</button>
            </div>
        )
    }
}

export default connect(
    (state:AppState)=>{
        return state
    },
    dispatch => ({
        sendData:(state:AppState)=>{
            dispatch({
                type:'PUSH_STATE',
                payload:{
                    firstName:state.firstName,
                    secondName:state.secondName,
                    date:state.date,
                    email:state.email,
                    admin:state.admin
                }
            })
        },
        clearStore: ()=>{
            dispatch({
                type:'CLEAR_STORE'
            })
        }
    })
)(UserInfo)