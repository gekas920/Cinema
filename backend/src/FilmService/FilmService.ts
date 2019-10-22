import express from 'express'
import ExpressNamespace from "../Interfaces/Interfaces";
const Film = require('../DataBase/Models/Film');



class Service {
    public createFilm(body:ExpressNamespace.FilmInfo){
        const newFilm = new Film(body);
        newFilm.save()
            .then((result:ExpressNamespace.FilmInfo)=>{
                console.log(result)
            })
    }
}

const FilmService = new Service();

export default FilmService