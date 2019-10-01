const web = require('./Main');
import express from 'express';
import UserService from "./UserService/UserService";


web.app.post('/createUser',(req:express.Request,res:express.Response)=>{
   UserService.Register(req.body,res);
});

web.app.post('/login',(req:express.Request,res:express.Response)=>{
    UserService.LogIn(req.body,res);
});

