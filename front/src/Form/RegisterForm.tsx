import React from "react";
import logo from '../Images/logo.png'
import BasicRequests from "../Requests/Requests";
import FormError from "./FormError";
import {Redirect} from "react-router";
import {AppState} from "../Store/Types";
import {connect} from "react-redux";
import './Form.sass'

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
    error:string,
    ok:boolean
}

interface IProps {
    firstName:string,
    secondName:string,
    date:string,
    email:string,
    sendData:any
}


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
            error:'',
            ok:false
        };
    }


    handleChange = (name: string) => (event:React.ChangeEvent<HTMLInputElement>) => {
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
                        else {
                            localStorage.setItem('token',res.data);
                            this.setState({
                                ok:true
                            });
                        }
                        this.clearInputs();
                        this.props.sendData({
                            firstName:this.state.firstName,
                            secondName:this.state.secondName,
                            email:this.state.email,
                            date:this.state.date
                        });
                    });
            }
        }
        else {
            BasicRequests.create('/login',{login:this.state.login,password:this.state.password})
                .then((result)=>{
                    if (result.data === 'Incorrect password' || result.data === 'Incorrect login') {
                        this.setState({
                            error:result.data
                        });
                    }
                    else {
                        localStorage.setItem('token',result.data);
                        this.setState({
                            ok:true
                        });
                    }
                })
        }

        setTimeout(()=>{
            this.setState({
                error:''
            })
        },5000)
    };

    inpFunc = (changeName:string,correctLabel?:string,type?:string)=>{
        return(
            <div className="group">
                <input className='input' onChange = {this.handleChange(changeName)} required type={type}/>
                <span className="bar"></span>
                <label className='label'>{correctLabel || changeName}</label>
            </div>
        )
    };

    render(){
        let arr = [
            this.inpFunc('firstName','first name'),
            this.inpFunc('secondName','second name'),
            this.inpFunc('email'),
            this.inpFunc('','','date'),
            ];
        if(!(this.state.ok || localStorage.getItem('token'))){
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
                        {this.inpFunc('login')}
                        {this.inpFunc('password','','password')}
                        {this.state.clicked && arr}
                    </div>
                    <button className="form--button" onClick={this.sendData}>{this.state.clicked ? <b>Sign up</b> : <b>Log in</b>}</button>
                </div>
            )
        }
        else {
            return <Redirect to='/home'/>
        }

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
        }
    })
)(Form)