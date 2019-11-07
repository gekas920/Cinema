import React from "react";
import { Carousel } from "react-responsive-carousel";
import './Main.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {LinearProgress} from "@material-ui/core";
import BasicRequests from "../Requests/Requests";
import {FilmInfo} from "./InterfacesMain";
import {mapDispatchToProps, mapStateToProps} from './MainState'
import {connect} from "react-redux";




interface IProps{
    sendFilmsData:any
}

interface IState {
    data:FilmInfo[]
}

class Slides extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            data:[]
        };
        console.log(this.props.sendFilmsData);
        this.getData();
    }

    getData = ()=>{
      BasicRequests.get('/getFilmInfo')
          .then(result=>{
              if(result){
                  this.setState({
                      data:result.data
                  })
              }
          })
    };

    filmsInfo = ()=>{
        let arr = this.state.data.map((elem:FilmInfo)=>{
            return(
              <div>
                  <h1>{elem.title}</h1>
                  <img src={elem.link} alt={elem.title}/>
              </div>
            )}
        );
        return arr
    };

    render(){

        if(this.state.data.length){
            return(
                <Carousel autoPlay className='container' showThumbs={false} showStatus={false} infiniteLoop={true}>
                    {this.filmsInfo()}
                </Carousel>
            )
        }
        else {
            return <LinearProgress/>
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Slides)

