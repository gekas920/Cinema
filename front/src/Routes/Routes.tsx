import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Form from "../Form/RegisterForm";
import Navbar from "../Navbar/Navbar"


class Routes extends React.Component{
    public render() {
        return (
            <Router>
                <Navbar/>
                <Route exact path = "/register" component = {Form}/>
                <Route exact path = "/home" component = {Form}/>
                <Route path="/:username" />
            </Router>
        );
    }
}

export default Routes