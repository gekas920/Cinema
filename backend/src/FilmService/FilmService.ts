import express from 'express'
import ExpressNamespace from "../Interfaces/Interfaces";
const Film = require('../DataBase/Models/Film');



class Service {
    public createFilm(body:ExpressNamespace.FilmInfo,res:express.Response){
        const newFilm = new Film(body);
        newFilm.save()
            .then((result:ExpressNamespace.FilmInfo)=>{
                res.send('done')
            })
            .catch((err:Error)=>{
                res.send('error')
            })
    }

    public ShowFilmsTable(res:express.Response){
        Film.find()
            .then((result:ExpressNamespace.FilmInfo[])=>{
                res.send(result)
            })
    }
}

const FilmService = new Service();

export default FilmService