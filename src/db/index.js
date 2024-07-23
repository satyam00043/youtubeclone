import mongoose from 'mongoose'
import {DB_NAME} from "../constant.js";
const dbConnect=async ()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Mongo db is connected on port := ${connectionInstance.connection.host}`);

    }catch(error){
        console.error(" Mongodb connection Error",error);
        throw error;
        process.exit(1)
    }
}
export default dbConnect;