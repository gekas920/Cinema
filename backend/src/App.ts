import express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app: express.Application = express();
const db = require('./DataBase/dbConfig');
import mongoose from 'mongoose';
import UserService from "./UserService/UserService";


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


mongoose.connect(db.mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('ok');
})
    .catch((err: any)=>console.log(err));


app.post('/createUser',(req:express.Request,res:express.Response)=>{
    UserService.Register(req.body,res);
});

app.get('/:username',(req:express.Request,res:express.Response)=>{
    res.send('hello')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


