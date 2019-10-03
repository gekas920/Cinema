import * as React from 'react'
import {Link} from "react-router-dom";
import '../App.css'
import logo from '../Images/logo.png'
import BasicRequests from "../Requests/Requests";


interface IState {
    done:boolean
}

interface IProps {}

class Navbar extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            done:false
        }
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
                        <li>{this.state.done ? <div>username</div> : 'Log in/Sign up'}</li>
                            </Link>
                </ul>
            </div>
        )
    }
}



export default Navbar