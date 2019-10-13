import React from "react";
import './Adverisment.css'





class Advertisment extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    To Advertisers
                </h1>
                <h4>Colleagues. We invite you to join our adv.program</h4>
                <h2>Cinema advertising</h2>
                <div className='all-table'>
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
                    <div>1</div>
                    <div>2</div>
                    </div>
                    <div className='table--row'>
                    <div>3</div>
                    <div>4</div>
                    </div>
                    <div className='table--row'>
                    <div>5</div>
                    <div>6</div>
                    </div>
                    <div className='table--row'>
                    <div>7</div>
                    <div>8</div>
                    </div>
                </div>
                <h2>Banners</h2>
                <div className='all-table'>
                    <div className='table--row'>
                    <div>1</div>
                    <div>2</div>
                    </div>
                    <div className='table--row'>
                    <div>3</div>
                    <div>4</div>
                    </div>
                    <div className='table--row'>
                    <div>5</div>
                    <div>6</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Advertisment