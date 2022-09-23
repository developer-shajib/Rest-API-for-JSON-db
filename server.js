const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

//init environment variable
const port = process.env.PORT || 8080

//init express
const app = express();

//get from data express middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))



//listen server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})