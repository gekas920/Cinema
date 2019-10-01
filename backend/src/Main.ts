import express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app: express.Application = express();
const db = require('./DataBase/dbConfig');
import mongoose from 'mongoose';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
mongoose.connect(db.mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('connected');
})
    .catch((err: any)=>console.log(err));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports.app = app;