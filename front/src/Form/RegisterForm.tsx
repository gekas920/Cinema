import React from "react";
import './Form.css'
import logo from '../Images/logo.png'
import BasicRequests from "../Requests/Requests";
import FormError from "./FormError";


interface User{
    login:string,
    password:string,
    email:string,
    firstName:string,
    secondName:string,
    date:string,
    admin:boolean
}


interface IState {
    login:string,
    password:string,
    email:string,
    firstName:string,
    secondName:string,
    date:string,
    clicked:boolean,
    value:string,
    error:string
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
            value:'',
            error:''
        }
    }


    handleChange = (name:keyof IState) => (event:React.ChangeEvent<HTMLInputElement>) => {
      this.setState({...this.state, [name]: event.target.value})
    };

    clearInputs = ()=>{
        let arr = Array.from(document.querySelectorAll<HTMLInputElement>('.input'));
        arr.forEach((elem)=>{
            elem.value = ''
        })
    };

    handleClick = ()=>{
        this.setState({
            clicked:true
        });
        this.clearInputs();
    };

    handleNoneClick = ()=>{
        this.setState({
            clicked:false
        });
        this.clearInputs()
    };

    validForm = (user:User):boolean=>{
        let ok:boolean = true;
        Object.entries(user).forEach(
            ([key,value])=>{
                if(key === 'firstName')
                    key = 'first name';
                if(key === 'secondName')
                    key = 'second name';
                if((!value || value.length < 5) && typeof(value) !== 'boolean'){
                    ok=false;
                    this.setState({
                        error:`${key} is too short`
                    })
                }
            }
        );
        return ok;
    };

    sendData = ()=> {
        if (this.state.clicked) {
            const userData = {
                login: this.state.login,
                password: this.state.password,
                firstName: this.state.firstName,
                secondName: this.state.secondName,
                email: this.state.email,
                date: this.state.date,
                admin:false
            };
            let ok:boolean = this.validForm(userData);
            if(ok){
                BasicRequests.create('/createUser', userData)
                    .then((res)=> {
                        this.clearInputs();
                        if (res.data === 'Already exist') {
                            this.setState({
                                error:'User already exist'
                            });
                        }
                        this.clearInputs()
                    });
            }
            setTimeout(()=>{
                this.setState({
                    error:''
                })
            },5000)
        }
        else {
            BasicRequests.create('/login',{login:this.state.login,password:this.state.password})
        }
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
                    <FormError text={this.state.error}/>
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