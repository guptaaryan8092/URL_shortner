import express from 'express';
import {nanoid} from "nanoid"

const app = express();

app.get("/api/create",(req,res)=>{
    res.send(nanoid(7))
})

const port = 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})