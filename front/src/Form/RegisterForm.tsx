import React from "react";
import './Form.css'
import logo from '../Images/logo.png'
import BasicRequests from "../Requests/Requests";

interface IState {
    login:string,
    password:string,
    email?:string,
    firstName?:string,
    secondName?:string,
    date?:string,
    clicked:boolean,
    value:string
}

interface IProps {}
class Form extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            login:'',
            password:'',
            firstName:'',
            secondName:'',
            email:'',
            date:'',
            clicked:false,
            value:''
        }
    }


    handleChange = (name:keyof IState) => (event:React.ChangeEvent<HTMLInputElement>) => {
      this.setState({...this.state, [name]: event.target.value})
    };

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

    sendData = ()=> {
        if (this.state.clicked) {
            const userData = {
                login: this.state.login,
                password: this.state.password,
                firstName: this.state.firstName,
                secondName: this.state.secondName,
                email: this.state.email,
                date: this.state.date
            };
            BasicRequests.create('/createUser', userData)
                .then(() => console.log('Send!'))
        }
        let arr = Array.from(document.querySelectorAll<HTMLInputElement>('.input'));
        arr.forEach((elem)=>{
            elem.value = ''
        })
    };

    render(){
        let arr = [
            <input className="input" placeholder="first name" onChange = {this.handleChange("firstName")} key = '1'/>,
            <input className="input" placeholder="second name" onChange = {this.handleChange("secondName")} key = '2'/>,
            <input className="input" placeholder="email" onChange={this.handleChange("email")} key = '3'/>,
            <input className="input" placeholder="date" type="date" onChange={this.handleChange("date")} key = '4'/>,
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
                    <input className="input" placeholder="login" onChange = {this.handleChange("login")}/>
                    <input className="input" placeholder="password" type="password"
                           onChange={this.handleChange("password")}/>
                    {this.state.clicked && arr}
                </div>
                <button className="form--button" onClick={this.sendData}>{this.state.clicked ? <b>Sign up</b> : <b>Log in</b>}</button>
            </div>
        )
    }
}

export default Form