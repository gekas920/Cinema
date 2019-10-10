import React from "react";
import BasicRequests from "../Requests/Requests";
import {connect} from "react-redux";
import {AppState} from "../Store/Types";
import './Home.css'


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
    admin:boolean
}

class Home extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            firstName:'',
            secondName:'',
            date:'',
            email:'',
            admin:false
        }
    }
    componentDidMount(): void {
        BasicRequests.securedGet('/getInfo')
            .then(result=>{
                this.props.sendData(result.data);
                this.setState({
                    firstName:result.data.firstName,
                    secondName:result.data.secondName,
                    date:new Date(result.data.date).toDateString(),
                    email:result.data.email
                });
            })
    }

    handleClick = ()=>{
      localStorage.clear();
      this.props.clearStore();
      window.location.href = '/register';
    };

    render(){
        return(
            <div className='home-content'>
                <h1>User Info</h1>
                <input value={this.state.firstName} className='home--input' readOnly={true}/>
                <input value={this.state.secondName} className='home--input' readOnly={true}/>
                <input value={this.state.email} className='home--input' readOnly={true}/>
                <input value={this.state.date} className='home--input' readOnly={true}/>
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