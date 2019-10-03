import express from 'express'
const jwt = require('jsonwebtoken');
module.exports = function (req:express.Request,res:express.Response,next:any) {
    const token:string|undefined = req.headers.authorization;
    console.log('token',token);
    jwt.verify(token,'Cinema',((err:Error) => {
        if(err){
            res.sendStatus(401).end();
        }
        next();
    }));
};