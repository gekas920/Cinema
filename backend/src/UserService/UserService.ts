import express from 'express'
import ExpressNamespace from "../Interfaces/Interfaces";
const jwt = require('jsonwebtoken');
const User = require('../DataBase/Models/User');
const bCrypt = require('../bcrypt/bcryptConfig');



class Service {
    private secretKey:string = 'Cinema';
    private genToken(id:string){
        return jwt.sign({
            data: id
        }, this.secretKey, { expiresIn: '2d' });
    }

    private static comparePasswords(current:string, hash:string){
        return bCrypt.crypt.compareSync(current,hash)
    }

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
                        response.send(this.genToken(newUser._id))
                    })
                }
            })
    }

    public LogIn(body:ExpressNamespace.User,response:express.Response){
        User.findOne({
            login:body.login
        })
            .then((result:ExpressNamespace.User)=>{
                if(result){
                    Service.comparePasswords(body.password,result.password) ? response.send(this.genToken(result._id))
                        : response.send('Incorrect password')
                }
                else{
                    response.send('Incorrect login')
                }
            })
    }


    public getInfo(id:string|undefined ,response:express.Response){
        let info = jwt.decode(id);
        if(info){
            User.findById(info.data)
                .then((result:ExpressNamespace.User)=>{
                    let userData:ExpressNamespace.UserData = {
                        firstName : result.firstName,
                        secondName : result.secondName,
                        email : result.email,
                        admin : result.admin,
                        date:result.date
                    };
                    response.send(userData);
                })
        }
        else
            response.sendStatus(401);
    }

}

const UserService = new Service();

export default UserService