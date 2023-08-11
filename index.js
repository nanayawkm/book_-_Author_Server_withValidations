//import express,body-parser
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authorRoutes = require('./routes/author')
const bookRoutes = require('./routes/book')


//create express server instance
const server = express();

//middlewares
server.use(bodyParser.json());

//Database



//Routes
server.use(authorRoutes)
server.use(bookRoutes)




//start server
mongoose.connect("mongodb+srv://codetrainUser:31tXdQb3qM77Ys79@atlascluster.wkvv0iy.mongodb.net/?retryWrites=true&w=majority",)
.then(result =>{
    server.listen(3001,function(){console.log('idey listen boss')})
}).catch(err => console.log(err))
