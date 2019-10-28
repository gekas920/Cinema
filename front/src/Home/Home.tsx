import React from "react";
import './Home.sass'
import Menu from "./Menu/Menu";
import icon from '../Images/ArrowIcon.png'


class Home extends React.Component{

    menuClick = () =>{

      let elem = document.querySelector('.home-menu');
      if(elem){
          elem.classList.toggle('active')
      }
      let button = document.querySelector('.home-content-menuButton');
      if(button){
          button.classList.toggle('active-button')
      }
      let img = document.querySelector('.button-img');
      if(img){
          img.classList.toggle('active-img');
      }
    };


    render(){
        return(
            <div>
                <button className='home-content-menuButton' onClick={this.menuClick}>
                    <img src={icon} className='button-img'/>
                </button>
                <Menu/>
            </div>
        )
    }
}

export default Home