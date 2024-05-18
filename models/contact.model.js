import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        required:true,
    }

},{timestamps:true})

export const Contact = mongoose.model('Contact',contactSchema)