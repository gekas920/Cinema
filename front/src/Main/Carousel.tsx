import React from "react";
import { Carousel } from "react-responsive-carousel";
import './Main.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Slides extends React.Component{
    render(){
        return(
            <Carousel autoPlay className='container' showThumbs={false} showStatus={false} infiniteLoop={true}>
                <div>
                    <img src="https://image.tmdb.org/t/p/original/rlay2M5QYvi6igbGcFjq8jxeusY.jpg"/>
                </div>
                <div>
                    <img src="https://image.tmdb.org/t/p/original/szvtDnwwGUnSgxRR59I3xwGLNCo.jpg" />
                </div>
                <div>
                    <img src="https://image.tmdb.org/t/p/original/uLXK1LQM28XovWHPao3ViTeggXA.jpg" />
                </div>
                <div>
                    <img src="https://image.tmdb.org/t/p/original/sfW7GcOuwZFuCxVoU5ULlkiDJ7Q.jpg" />
                </div>
                <div>
                    <img src="https://image.tmdb.org/t/p/original/3ghImmHdp4RnC3UkL6hpLayclnb.jpg" />
                </div>
            </Carousel>
        )
    }
}

export default Slides

