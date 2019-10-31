import FilmService from "./FilmService/FilmService";

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

web.app.get(secured + '/getInfo',(req:express.Request,res:express.Response)=>{
    const id:string | undefined = req.headers.authorization;
    UserService.getInfo(id,res);
});

web.app.get('/getName/:token',(req:express.Request,res:express.Response)=>{
    UserService.getInfo(req.params.token,res);
});

web.app.post(secured + '/createFilm',(req:express.Request,res:express.Response)=>{
   FilmService.createFilm(req.body,res);
});

web.app.get(secured+'/films',(req:express.Request,res:express.Response)=>{
    FilmService.ShowFilmsTable(res);
});



