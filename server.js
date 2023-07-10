
const express =require('express');
const dotenv=require('dotenv');


// configure env
dotenv.config();

//rest object
const app=express();

//rest api building example
app.get('/' , (req, res)=>{
    res.send("hello this is my ecommerce full stack web application");
});


//port
 const port=process.env.PORT;

 //run or listen app
 app.listen(port ,()=>{
    console.log(` server is running on ${port}`);
 });
