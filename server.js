
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require('cors')
const app = express()

//Require Routes 

const appointmentRoutes = require("./routes/appointmentRoutes")
const hairStyleRoutes = require("./routes/hairStyleRoutes")
const userRoutes = require("./routes/userRoutes")

//Auth Route

const authRoutes = require("./routes/authenticationRoutes")


//DOTENV ATLAS 
const dotenv = require("dotenv");
dotenv.config();
require('../Server/config/database')


// middleware 
app.use(cors())
app.use(logger('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//Mount routes 
app.use("/user", userRoutes)
app.use("/appointment", appointmentRoutes)
app.use("/hairstyle", hairStyleRoutes)


const port = process.env.PORT || 3020;

app.listen(port, function (){
    console.log(`hi there, im running on port ${port}`)
})


