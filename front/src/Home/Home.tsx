import React from "react";
import BasicRequests from "../Requests/Requests";



class Home extends React.Component{
    componentDidMount(): void {
        BasicRequests.securedGet('/123')
    }

    render(){
        return(
            <div>1231230812381-</div>
        )
    }
}

export default Home