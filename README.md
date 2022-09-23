<img style="height:300px;width:60%" src="./public/images/dev_shajib.png">

## Rest API For Json db with express server

This is first Rest API Project for json db with express js

# First Clone this repo and then install its pacages

```console
$ npm install
```

# Server code for this project

```js
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
```

## Packages

* express
* nodemon
* dotenv
* multer
* nodemailder
* axios

## Live Server Project Link

[Site Link](http://localhost:5050/student)
