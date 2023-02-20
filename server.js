const express= require('express')
const cors= require('cors')
const mongoose = require('mongoose')
const userRoutes = require("./server/routes/userRoutes")
const port= 2110
const app = express()
require('dotenv').config()
const url = "mongodb://localhost:27017/comfy-cot";

app.use(cors(port));
app.use(express.json());
app.use("/api/auth",userRoutes)

const server = app.listen(port,()=>{
    console.log('listening on port ..... ')

})
const connect = ()=>{
    try {
        mongoose.connect(url,()=>{
            console.log("connected successful ...")
        })
    } catch (error) {
        console.log(`error ${err.message}`);
    }
}

connect()




