import React from "react";
import './Adverisment.css'





class Advertisment extends React.Component{
    render(){
        return(
            <div className = 'advertisement'>
                <h1>
                    To Advertisers
                </h1>
                <h4>Colleagues. We invite you to join our adv.program</h4>
                <div className='all-table'>
                    <h2>Cinema advertising</h2>
                    <div className='table--row first-row'>
                    <div></div>
                        <div><p>Monday - Thursday. Before 18:00 / After 18:00</p></div>
                    <div>Friday - Wednesday. Before 18:00 / After 18:00</div>
                    </div>
                    <div className='table--row'>
                    <div>Movie rental</div>
                    <div>50 - 80 $</div>
                    <div>60 - 90 $</div>
                    </div>
                    <div className='table--row'>
                    <div>Short film</div>
                    <div>150$</div>
                    <div>170%</div>
                    </div>
                </div>
                <h2>Advertising in the lobby</h2>
                <div className='all-table'>
                    <div className='table--row'>
                    <div>1 x 1.6 meters banner</div>
                    <div>300$ per month</div>
                    </div>
                    <div className='table--row'>
                    <div>0.8 x 1.2 meters banner</div>
                    <div>270$ per month</div>
                    </div>
                    <div className='table--row'>
                    <div>0.5 x 0.5 meters banner</div>
                    <div>245$ per month</div>
                    </div>
                    <div className='table--row'>
                    <div>0.8 x 0.4 meters banner</div>
                    <div>250$ per month</div>
                    </div>
                </div>
                <h2>Banners</h2>
                <div className='all-table'>
                    <div className='table--row'>
                    <div>5 x 6 meters banner on the street</div>
                    <div>500$ per month</div>
                    </div>
                    <div className='table--row'>
                    <div>7 x 7 meters banner on the street</div>
                    <div>750$ per month</div>
                    </div>
                    <div className='table--row'>
                    <div>4 x 4 meters banner on the street</div>
                    <div>430$ per month</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Advertisment