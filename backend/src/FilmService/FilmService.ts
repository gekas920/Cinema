import express from 'express'
import ExpressNamespace from "../Interfaces/Interfaces";
const Film = require('../DataBase/Models/Film');



class Service {
    public createFilm(body:ExpressNamespace.FilmInfo,res:express.Response){
        console.log(body);
        const newFilm = new Film(body);
        newFilm.save()
            .then((result:ExpressNamespace.FilmInfo)=>{
                res.send('done')
            })
    }

    public ShowFilmsTable(res:express.Response){
        Film.find()
            .then((result:any)=>{
                console.log(result);
            })
    }
}

const FilmService = new Service();

export default FilmService