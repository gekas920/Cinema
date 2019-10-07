import * as React from 'react'
import {Link} from "react-router-dom";
import '../App.css'
import logo from '../Images/logo.png'
import BasicRequests from "../Requests/Requests";
import {connect} from "react-redux";
import {AppState} from "../Store/Types";


function mapStateToProps(state:AppState):AppState{
    return {
        firstName:state.firstName,
        secondName:state.secondName,
        date:state.date,
        email:state.email
    }
}


interface IState {
    done:boolean
}


class Navbar extends React.Component<any,IState>{
    constructor(props:any){
        super(props);
        this.state = {
            done:false
        };
        console.log(this.props);
    }

    componentDidMount(): void {
        BasicRequests.get(`/check/${localStorage.getItem('token')}`)
            .then(result=>{
                if(result.data === 'Confirmed'){
                    this.setState({
                        done:true
                    })
                }
            })
    }

    public render(){
        return(
            <div className="navbar">
                <ul>
                    <img src={logo} alt = "logo" className="navbar--logo"/>
                    <Link to='/' className="navbar--item"><li>1</li></Link>
                    <Link to='/' className="navbar--item"><li>2</li></Link>
                    <Link to='/' className="navbar--item"><li>3</li></Link>
                    <Link to='/register' className="navbar--item">
                        <li>{this.props.firstName ? this.props.firstName : 'Log in/sign up'}</li>
                    </Link>
                </ul>
            </div>
        )
    }
}



export default connect(
    mapStateToProps
)(Navbar)