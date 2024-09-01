import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    phone:{
        type:Number,
        require:true,

    },
    passwor:{
        type:String,
        require:true,
        
    },
    role:{
        type:Number,
        enum:['student','recruiter'],
        require:true
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String},
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.type.ObjjectId,ref:'company'},
        profilephoto:{
            type:String,
            default:""
        }     
    },
},{timeseries:true});
export const User = mongoose.model('User',userSchema);