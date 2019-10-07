import express from 'express'
const jwt = require('jsonwebtoken');
module.exports = function (req:express.Request,res:express.Response,next:any) {
    const token:string|undefined = req.headers.authorization;
    // console.log(req.headers.authorization);
     //console.log(jwt.verify(token,'Cinema'));
    jwt.verify(token,'Cinema',function (err:Error,decoded:any) {
        if(err){
            res.sendStatus(401).end();
        }
        next();
    })
};