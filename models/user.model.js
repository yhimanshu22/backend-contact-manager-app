import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    }
},{timestamps:true})

export const User = mongoose.model('User',userSchema);