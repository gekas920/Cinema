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

    public UpdateFilmInfo(body:ExpressNamespace.FilmInfo,res:express.Response){
        Film.findOneAndUpdate({
            title:body.title
        },body)
            .then((result:ExpressNamespace.FilmInfo|null)=>{
                if(result)
                    res.send('done');
                else{
                    res.send('error')
                }
            })
    }

    public DeleteFilm(title:string,res:express.Response){
        Film.findOneAndDelete({
            title:title
        })
            .then(()=>{
                res.send('done')
            })
    }
}

const FilmService = new Service();

export default FilmService