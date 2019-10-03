import React from "react";
import BasicRequests from "../Requests/Requests";



class Home extends React.Component{
    componentDidMount(): void {
        BasicRequests.securedGet('/123')
    }

    render(){
        return(
            <div>123123081238121-</div>
        )
    }
}

export default Home