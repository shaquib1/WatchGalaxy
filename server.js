
const express =require('express');

//rest object
const app=express();

//rest api building example
app.get('/' , (req, res)=>{
    res.send("hello this is my ecommerce website");
});


//port
 const port=8000;

 //run or listen app
 app.listen(port ,()=>{
    console.log(` server is running on ${port}`);
 });
