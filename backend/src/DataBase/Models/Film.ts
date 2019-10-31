import mongoose from 'mongoose'

const FilmSchema = new mongoose.Schema({
   title:{
       type:String,
       required:true
   },
    actors:{
       type:String,
       required:true
    },
    description:{
       type:String,
       required:true
    },
    genres:{
       type:String,
       required:true
    },
    link:{
       type:String,
       required:true
    },
    createdBy:{
       type:String,
        required:true
    },
    tenant:{
       type:String,
        required:true
    }
});

const Film = mongoose.model('Film',FilmSchema);
module.exports = Film;