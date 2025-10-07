const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const categoryRouter = require('./router/category.router')
const server = express()
server.use(cors({origin: "http://localhost:3000"}))
server.use(express.json())
server.use("/category", categoryRouter)


server.listen(5000, ()=> {
    console.log("Server Running PORT 5000");
    mongoose.connect("mongodb://localhost:27017/", {dbName : "sishop"}).then(()=> {
        console.log("databse is connnected");
    }).catch(()=> {
        console.log("database is unable to connect");
        
    })
})
