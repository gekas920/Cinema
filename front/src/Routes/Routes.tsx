import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Form from "../Form/RegisterForm";
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home";
import {Provider} from "react-redux";
import {createStore} from 'redux'
import AllReducers from "../Store/Store";
const store = createStore(AllReducers.Reduce);


class Routes extends React.Component{
    public render() {
        return (
            <Provider store={store}>
            <Router>
                <Navbar/>
                <Route exact path = "/register" component = {Form}/>
                <Route exact path = "/home" component = {Home}/>
            </Router>
            </Provider>
        );
    }
}

export default Routes