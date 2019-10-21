import * as React from 'react'
import {Link} from "react-router-dom";
import '../App.css'
import logo from '../Images/logo.png'
import {connect} from "react-redux";
import {AppState} from "../Store/Types";
import BasicRequests from "../Requests/Requests";


function mapStateToProps(state:AppState):AppState{
    return {
        firstName:state.firstName,
        secondName:state.secondName,
        date:state.date,
        email:state.email
    }
}

interface IState {
    first:boolean,
    second:boolean,
    third:boolean,
    fourth:boolean,
    name:string
}



class Navbar extends React.Component<AppState,IState>{

    constructor(props:AppState){
        super(props);
        this.state = {
            first:false,
            second:false,
            third:false,
            fourth:false,
            name:''
        }
    }

    componentDidMount(): void {
        BasicRequests.get(`/getName/${localStorage.getItem('token')}`)
            .then(result=>{
                if(result){
                    this.setState({
                        name:result.data.firstName
                    })
                }
            })
    }

    handleClick = (name:keyof IState) => () =>{
        this.setState({
            first:false,
            second:false,
            third:false,
            fourth:false,
            [name]:true,
            name:this.state.name
        })
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
                        <li>{this.state.name || this.props.firstName ? this.state.name || this.props.firstName : 'Log in/sign up'}</li>
                    </Link>
                </ul>
            </div>
        )
    }
}



export default connect(
    mapStateToProps
)(Navbar)