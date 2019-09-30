import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
   login:{
       type:String,
       required:true,
       unique:true
   },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    secondName:{
        type:String,
        required:true
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;