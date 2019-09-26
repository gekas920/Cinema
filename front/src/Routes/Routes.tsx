import React from "react";
import {createBrowserHistory} from "history";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Form from "../Form/RegisterForm";
import Navbar from "../Navbar/Navbar";

const history : any = createBrowserHistory();


class Routes extends React.Component{
    public render() {
        return (
            <Router>
                <Navbar/>
                <Route exact path = "/register" component = {Form}/>
            </Router>
        );
    }
}

export default Routes