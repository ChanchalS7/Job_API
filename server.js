//import 
// const express = require('express');=> cjs 
import express from 'express'

//rest object 
const app = express();


//middleware 


//routes 
app.get('/', (req, res) => {
	res.send(`<h1>Welcome to My Job Portal</h1>`)
})

//listen 
app.listen(8080, () => {
	console.log('Server is running')
})