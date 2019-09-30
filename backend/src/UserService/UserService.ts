import express from 'express'
import ExpressNamespace from "../Interfaces/Interfaces";
const router = express.Router();

const User = require('../DataBase/Models/User');
const bCrypt = require('../bcrypt/bcryptConfig');

class Service {
    public Register(body:ExpressNamespace.User,response:express.Response){
        const newUser= new User(body);
        newUser.password = bCrypt.crypt.hashSync(newUser.password, bCrypt.salt);
        User.findOne({
            login:newUser.login,
            email:newUser.email
        });
        response.redirect('/home')
    }
}

const UserService = new Service();

export default UserService