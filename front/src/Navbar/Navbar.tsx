import * as React from 'react'
import {Link} from "react-router-dom";
import '../App.css'
import logo from '../Images/logo.png'
import {connect} from "react-redux";
import {AppState} from "../Store/Types";
import * as CryptoJS from "crypto-js";
import {WordArray} from "crypto-js";


function mapStateToProps(state:AppState):AppState{
    return {
        firstName:state.firstName,
        secondName:state.secondName,
        date:state.date,
        email:state.email,
        admin:state.admin,
        filmArray:[]
    }
}

interface IState {
    first:boolean,
    second:boolean,
    third:boolean,
    fourth:boolean,
}



class Navbar extends React.Component<AppState,IState>{

    constructor(props:AppState){
        super(props);
        this.state = {
            first:false,
            second:false,
            third:false,
            fourth:false,
        }
    }



    handleClick = (name:keyof IState) => () =>{
        this.setState({
            first:false,
            second:false,
            third:false,
            fourth:false,
            [name]:true,
        })
    };

    getName = ():string => {
        let info:string|WordArray|null = localStorage.getItem('data');
        let plaintext:string = '';
        if(info){
            const bytes = CryptoJS.AES.decrypt(info, 'firstName');
            plaintext = bytes.toString(CryptoJS.enc.Utf8);
        }
        return plaintext
    };

    render(){
        return(
            <div className="navbar">
                <ul>
                    <img src={logo} alt = "logo" className="navbar--logo"/>
                    <Link to='/main' className="navbar--item"
                          onClick={this.handleClick("first")}
                          style={this.state.first ?
                              {borderBottom:'4px solid #FCD24E'} : {}}
                    >
                        <li>Affiche</li></Link>
                    <Link to='/' className="navbar--item"
                          onClick={this.handleClick("second")}
                          style={this.state.second ?
                              {borderBottom:'4px solid #FCD24E'} : {}}
                    >
                        <li>2</li></Link>
                    <Link to='/advertisment' className="navbar--item"
                          onClick={this.handleClick("third")}
                          style={this.state.third ?
                              {borderBottom:'4px solid #FCD24E'} : {}}>
                        <li>To advertisers</li></Link>
                    <Link to='/register' className="navbar--item"
                          onClick={this.handleClick("fourth")}
                          style={this.state.fourth ?
                              {borderBottom:'4px solid #FCD24E'} : {}}
                    >
                        <li>{this.getName() ? this.getName() : 'Log in/sign up'}</li>
                    </Link>
                </ul>
            </div>
        )
    }
}



export default connect(
    mapStateToProps
)(Navbar)