
import express  from "express";  //this is es6 module features import and export        // const express =require('express');
import Color from "color";         //const colors= require('color');
import dotenv from "dotenv";           // const dotenv=require('dotenv');
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from 'cors';

//rest object
const app=express();    // here .env file is root file so we not use path but if this file inside any folder that use in config(path:'path_name')

// middelwares
app.use(cors());        // call cors or use cors
app.use(express.json());
app.use(morgan('dev'));

// configure env
dotenv.config();

// databse config
connectDB();


// routes
app.use('/api/v1/auth',authRoutes);


//rest api building example
app.get('/' , (req, res)=>{
    res.send("<h1>hello this is my ecommerce full stack web application in mern</h1>");
});


//port
 const PORT = process.env.PORT || 8000;

 //run or listen app
 app.listen(PORT ,()=>{
    console.log(`server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgBlack.white);
 });
