import React from "react";
import BasicRequests from "../Requests/Requests";
import {connect} from "react-redux";
import {AppState} from "../Store/Types";
import './Home.sass'
import * as CryptoJS from "crypto-js";
import Menu from "./Menu";


interface IProps{
    firstName:string,
    secondName:string,
    date:string,
    email:string,
    sendData:any,
    clearStore:any
}

interface IState {
    firstName:string,
    secondName:string,
    date:string,
    email:string,
    admin:boolean,
    open:boolean
}


class Home extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            firstName:'',
            secondName:'',
            date:'',
            email:'',
            admin:false,
            open:false
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

    inpFunc = (correctLabel:string,value:string)=>{
        return(
            <div className="group">
                <input className='input-home' value={value} readOnly/>
                <span className="bar"></span>
                <label className='label-home'>{correctLabel}</label>
            </div>
        )
    };

    handleClick = ()=>{
      localStorage.clear();
      this.props.clearStore();
      window.location.href = '/home';
    };

    menuClick = () =>{
      this.setState({
          open:!this.state.open
      });

      let elem = document.querySelector('.home-menu');
      if(elem){
          elem.classList.toggle('active')
      }
    };


    render(){
        return(
            <div>
                <button className='home-content-menuButton' onClick={this.menuClick}>Click</button>
                <div className='home-content'>
                  <h1>User Info</h1>
                  {this.inpFunc('first name',this.state.firstName)}
                  {this.inpFunc('second name',this.state.secondName)}
                  {this.inpFunc('email',this.state.email)}
                  {this.inpFunc('date',this.state.date)}
                  <button className='home--button' onClick={this.handleClick}>Log out</button>
              </div>
                <Menu/>
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
                    email:state.email
                }
            })
        },
        clearStore: ()=>{
            dispatch({
                type:'CLEAR_STORE'
            })
        }
    })
)(Home)