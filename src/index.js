

/*
// require('dotenv').config({path:'./env'});

// import  {DB_NAME} from "./constant"
// import express from 'express';
//const app=express();

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
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import dbConnect from './db/index.js';

import app from './app.js';
dotenv.config({
    path: './env'
})



dbConnect().
then(
    ()=>{
        app.listen(process.env.PORT,()=>{
            console.log(` server is running on the port number : ${process.env.PORT}`)
        });
        app.on("Error",(error)=>{
            console.error("Connection error",error)
            throw error;
        });
    }
)
.catch((error)=>{
    console.log("mongo db connection failed ", error)
})