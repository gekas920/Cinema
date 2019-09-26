import * as React from 'react'
import {Link} from "react-router-dom";
import '../App.css'
import logo from '../Images/logo.png'


interface IState {

}

class Navbar extends React.Component{
    public render(){
        return(
            <div className="navbar">
                <ul>
                    <img src={logo} alt = "logo" className="navbar--logo"/>
                    <Link to='/' className="navbar--item"><li>1</li></Link>
                    <Link to='/' className="navbar--item"><li>2</li></Link>
                    <Link to='/' className="navbar--item"><li>3</li></Link>
                    <Link to='/register' className="navbar--item"><li>Log in</li></Link>
                </ul>
            </div>
        )
    }
}



export default Navbar