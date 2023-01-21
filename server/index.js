import express from 'express';
import * as dotenv from "dotenv"
import cors from "cors"
import postRoutes from "./routes/postRoutes.js"
import DallieRoutes from "./routes/DallieRoutes.js"
import connectDB from './mongodb/Connect.js';

dotenv.config()
const app=express()
app.use(cors())

app.use("/api/v1/post",postRoutes)
app.use("/api/v1/dallie",DallieRoutes)

app.use(express.json({limit:"50mb"}))

const startServer=async()=>{
    try{
        connectDB(process.env.MONGODB_URL)
        app.listen(5000,()=>console.log("done"))
    }
    catch(err){
        console.log(err);
    }
}
startServer()