import React from "react";
import './Home.sass'
import {Link} from "react-router-dom";




class Menu extends React.Component{
    render(){
        return(
            <div className='home-menu'>
                <ul className='home-menu-list'>
                    <Link to='/home/userInfo' className='home-menu-list-item'>User Info</Link>
                    <Link to='/home/films' className = 'home-menu-list-item'>Films</Link>
                </ul>
            </div>
        )
    }
}

export default Menu