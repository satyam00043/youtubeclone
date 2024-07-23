// require('dotenv').config({path:'./env'});

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import dbConnect from './db/index.js';
// import  {DB_NAME} from "./constant"
// import express from 'express';
//const app=express();
dotenv.config({
    path: './env'
})

/*

first approch
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
        app.on("Error",(error)=>{
            console.error("Connection error",error)
            throw error;
        });
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })

    }catch(error){
        console.error("Error",error)
        throw error

    }
})()*/

dbConnect()