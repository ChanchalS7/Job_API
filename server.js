//package import 
// const express = require('express');=> cjs 
import express from 'express'
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from 'morgan';
import "express-async-errors"
//files import 
import connectDB from './config/db.js';
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errroMiddelware from "./middlewares/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js";
import jobsRoutes from "./routes/jobsRoute.js"
//Dot ENV config
dotenv.config();

// mongodb connection
connectDB();

//rest object
const app = express();

//middelwares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));



//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);


//validation middelware
app.use(errroMiddelware);
//port 
const PORT = process.env.PORT || 8080
//listen 
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT} in ${process.env.DEV_MODE}`.bgCyan.white)
})

