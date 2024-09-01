import { application } from "express";
import mongoose from "mongoose";

const jobSchema =new mongoose.Schema({
    title:{
    type:String,
    require:true
    },

    description:{
        type:String,
        require:true
    },
    requirement:[{
        type:String,
    }],
    salary:{
        type:Number,
        require:true
    },
    location:{
        type:String,
        require:true
    },

    jobType:{
        type:String,
        require:true
    },

    position:{
        type:Number,
        require:true
    },
    company:{
        type:mongoose.Schema.ObjectId,
        ref:'company',
        require:true,
    },
    created_by:{
        type:mongoose.Schema.ObjectId,
        ref:'user',
        require:true,
    },

    application:{
        
        type:mongoose.Schema.ObjectId, 
        ref:'application',
        
    }
});
export const job = mongoose.model("job", jobSchema);