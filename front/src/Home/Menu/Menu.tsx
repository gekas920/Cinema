import React from "react";
import '../Home.sass'
import {Link} from "react-router-dom";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentIcon from '@material-ui/icons/Assignment';
class Menu extends React.Component{
    handleClick = ()=>{
        let elem = document.querySelector('.home-menu');
        if(elem){
            elem.classList.remove('active')
        }
        let button = document.querySelector('.home-content-menuButton');
        if(button){
            button.classList.remove('active-button')
        }
        let img = document.querySelector('.button-img');
        if(img){
            img.classList.remove('active-img');
        }
    };
    render(){
        return(
            <div className='home-menu'>
                <ul className='home-menu-list'>
                    <div className='home-menu-list-elem'>
                        <AccountBoxIcon/>
                        <Link to='/home/user'
                              className='home-menu-list-link'
                              onClick={this.handleClick}>User Info</Link>
                    </div>
                    <div className='home-menu-list-elem'>
                        <AssignmentIcon/>
                        <Link to='/home/films'
                              className = 'home-menu-list-link'
                              onClick={this.handleClick}>Films</Link>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Menu