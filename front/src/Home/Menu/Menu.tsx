import React from "react";
import '../Home.sass'
import {Link} from "react-router-dom";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentIcon from '@material-ui/icons/Assignment';
class Menu extends React.Component{
    render(){
        return(
            <div className='home-menu'>
                <ul className='home-menu-list'>
                    <div className='home-menu-list-elem'>
                        <AccountBoxIcon/>
                        <Link to='/home/userInfo' className='home-menu-list-link'>User Info</Link>
                    </div>
                    <div className='home-menu-list-elem'>
                        <AssignmentIcon/>
                        <Link to='/home/films' className = 'home-menu-list-link'>Films</Link>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Menu