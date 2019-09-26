import React from "react";
import './Form.css'
import logo from '../Images/logo.png'

interface IState {
    login:string,
    password:string,
    email?:string,
    username?:string,
    date?:string,
    clicked:boolean
}

interface IProps {}
class Form extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            login:'',
            password:'',
            username:'',
            email:'',
            date:'',
            clicked:false
        }
    }

    handleClick = ()=>{
        this.setState({
            clicked:true
        })
    };

    handleNoneClick = ()=>{
        this.setState({
            clicked:false
        })
    };

    render(){
        let arr = [
            <input className="input" placeholder="username"/>,
            <input className="input" placeholder="email"/>,
            <input className="input" placeholder="date" type="date"/>,
            ];
        return(
            <div className="form">
                <div className="form--header">
                <img className="form--logo" src={logo} alt="logo"/>
                <h1>Partak</h1>
                </div>
                <div className="switch">
                    <span className="switch--headers" onClick={this.handleNoneClick}>Log in</span>
                    <span className="switch--headers" onClick={this.handleClick}>Sign up</span>
                </div>
                <div className="form--inputblock">
                    <input className="input" placeholder="login"/>
                    <input className="input" placeholder="password" type="password"/>
                    {this.state.clicked && arr}
                </div>
                <button className="form--button">{this.state.clicked ? <b>Sign up</b> : <b>Log in</b>}</button>
            </div>
        )
    }
}

export default Form