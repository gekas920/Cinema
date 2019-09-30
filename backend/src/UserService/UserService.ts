import express from 'express'
import ExpressNamespace from "../Interfaces/Interfaces";
const router = express.Router();

const User = require('../DataBase/Models/User');
const bCrypt = require('../bcrypt/bcryptConfig');

class Service {
    public Register(body:ExpressNamespace.User,response:express.Response) {
        const newUser = new User(body);
        newUser.password = bCrypt.crypt.hashSync(newUser.password, bCrypt.salt);
        User.findOne({
            login: newUser.login,
        })
            .then((result:ExpressNamespace.User)=>{
                if(result){
                    response.send('Already exist')
                }
                else {
                    newUser.save().then(()=>{
                        response.redirect(`/${newUser.login}`)
                    })
                }
            })
    }
}

const UserService = new Service();

export default UserService