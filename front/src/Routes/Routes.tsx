import React from "react";
import { BrowserRouter as Router, Route,Redirect} from "react-router-dom";
import Form from "../Form/RegisterForm";
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home";
import {Provider} from "react-redux";
import {store} from "../Store/Store";
import Advertisment from "../Adveritsment/Advertisment";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import UserInfo from "../Home/UserInfo/UserInfo";
import Films from "../Home/Films/Films";


class Routes extends React.Component{
    public render() {
        return (
            <Provider store={store}>
            <Router>
                <Navbar/>
                <Redirect from="/" to={window.location} />
                <Route exact path = '/main' component = {Main}/>
                <Route exact path = "/register" component = {Form}/>
                <Route>
                    <Route path = "/home" component = {Home}/>
                    <Route exact path = '/home/userInfo' component = {UserInfo}/>
                    <Route exact path = '/home/films' component = {Films}/>
                </Route>
                <Route exact path = "/advertisment" component = {Advertisment}/>
            </Router>
                <Footer/>
            </Provider>
        );
    }
}

export default Routes