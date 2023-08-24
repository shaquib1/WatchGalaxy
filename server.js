
import express  from "express";  //this is es6 module features import and export        // const express =require('express');
import Color from "color";         //const colors= require('color');
import dotenv from "dotenv";           // const dotenv=require('dotenv');
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import categoryRoute from  './routes/categoryRoutes.js'
import productRoute from './routes/productRoutes.js'
import cors from 'cors';
import path from 'path';

//rest object
const app=express();    // here .env file is root file so we not use path but if this file inside any folder that use in config(path:'path_name')

// middelwares
app.use(cors());        // call cors or use cors
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'./client/build')))

// configure env
dotenv.config();

// databse config
connectDB();


// routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category' , categoryRoute)
app.use('/api/v1/product' , productRoute)


//rest api b
app.use('*' , function(req , res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

//port
 const PORT = process.env.PORT || 8000;

 //run or listen app
 app.listen(PORT ,()=>{
    console.log(`server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgBlack.white);
 });
