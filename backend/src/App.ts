const web = require('./Main');
import express from 'express';
import UserService from "./UserService/UserService";
const secured:string = '/secured';



web.app.post('/createUser',(req:express.Request,res:express.Response)=>{
   UserService.Register(req.body,res);
});

web.app.post('/login',(req:express.Request,res:express.Response)=>{
    UserService.LogIn(req.body,res);
});

web.app.get(secured + '/:id',(req:express.Request,res:express.Response)=>{
});

