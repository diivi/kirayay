const express= require('express');
const app = express();
const mongoose= require('mongoose');

app.listen(3000,()=>{
    console.log("Running on Port 3000");
})