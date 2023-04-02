//package import 
// const express = require('express');=> cjs 
import express from 'express'
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from 'morgan';
//files import 
import connectDB from './config/db.js';
import testRoutes from "./routes/testRoutes.js"
//rest object 
const app = express();

//dotENV config
dotenv.config() // {path:'./config/}

//mongodb connection 
connectDB();

//middleware 
app.use(express.json())
app.use(cors())
app.use(morgan('dev'));


//routes 
app.get('/', (req, res) => {
	res.send(`<h1>Welcome to My Job Portal</h1>`)
})

app.use('/api/v1/test', testRoutes)
//port 
const PORT = process.env.PORT || 8080
//listen 
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT} in ${process.env.DEV_MODE}`.bgCyan.white)
})

