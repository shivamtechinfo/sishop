require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const categoryRouter = require('./router/category.router')
const colorRouter = require('./router/color.router')
const server = express();
server.use(cors({origin: "http://localhost:3000"}))
server.use(express.json())
server.use('/category', categoryRouter)
server.use('/color', colorRouter)
server.use(express.static('public'));

server.listen(
    5000, 
    ()=> {
        console.log('Server Running PORT 5000');
        mongoose.connect(process.env.DATABASE_URL, {dbName: "rishop"}).then(
            ()=> {
                console.log("Database Connected");
            }
        ).catch(()=> {
            console.log('unable to connect database');
        })
        
    }
)
