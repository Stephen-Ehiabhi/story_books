const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookies = require('cookie-parser');
const dotenv = require('dotenv');
const aws = require('aws-sdk');
const multer = require('multer-S3');
const nodemon = require('nodemon');

//npm i express mongoose jsonwebtoken cookie-parser dotenv multer-S3 aws-sdk nodemon bcrypt
const PORT = process.env.PORT || 5000

//declaring an app variable with express
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static())
app.use(cookies())

mongoose.connect(process.env.Mongo_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: true
},(error)=>{
    if (error) console.log(`There was an error loading the server and connecting to db ${error}`);
    else app.listen(PORT,()=>{
     console.log(`storybooks DB, connected and server listening on port:${PORT}`);
    })
})

//imported routes
const books = require('./routes/book')
const users = require('./routes/user')
const admin = require('./routes/admin')

//route middleware
app.use('/', users)
app.use('/api', books)
app.use('/admin', admin)

