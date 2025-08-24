import express from 'express';
import {nanoid} from "nanoid"
import connectDB from './src/config/mongo.config.js';
import dotenv from 'dotenv';
//Here {nanoid} is destructured with braces.

dotenv.config();
const app = express();

app.use(express.json()) // Body parser
app.use(express.urlencoded({extended:true}))

app.post("/api/create",(req,res)=>{
    const {url} = req.body
    console.log(url)
    res.send(nanoid(7))
})

const port = 5000;
app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`)
})