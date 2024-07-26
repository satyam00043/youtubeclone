import express from 'express'
import  cors from "cors";
import  cookirParcer from "cookie-parser"

const app=express();

app.use(cors({
    credentials: true,
    origin: process.env.CORSE_ORIGIN
}));
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(cookirParcer());
app.use(express.static("public"))
//routes import

import userRouter from './routes/user.routes.js'

//using routes
//writing api will be good practicee
app.use("/user",userRouter);









export default app;