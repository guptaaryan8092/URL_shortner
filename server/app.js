import express from 'express';
import {nanoid} from "nanoid"
import connectDB from './src/config/mongo.config.js';
import dotenv from 'dotenv';
//Here {nanoid} is destructured with braces.
import urlSchema from './src/models/short_url.model.js';
import short_url from './src/routes/short_url.route.js';    
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';


dotenv.config();
const app = express();

app.use(express.json()) // Body parser
app.use(express.urlencoded({extended:true}))

app.use("/api/create",short_url)
app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)

const port = 5000;
app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`)
})