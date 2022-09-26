
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');


/**
 * @desc get all users data
 * @name GET /api/v1/user/
 * @access public
 */
const getAllUser = (req,res)=>{
    //get users data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname,'../db/users.json')));
    
    //send data
    res.status(200).json(users)
}

/**
 * @desc Create a new user
 * @name POST /api/v1/user/
 * @access public
 */
const createUser =(req,res)=>{
    //get users data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname,'../db/users.json')));

    //get body data
    const {name,skill} = req.body;

    //validation
    if(!name || !skill){
        res.status(400).json({
            message : "Name & Skill is required"
        })
    }
    else{
        // data push to json db
        users.push({
            id : Math.floor(Math.random()*100000000000).toString(),
            name : name,
            skill : skill
        });
        writeFileSync(path.join(__dirname,'../db/users.json'),JSON.stringify(users));
        res.status(201).json({
            message : 'User Created Successfully'
        })
    }
}

/**
 * @desc Get single User
 * @name GET /api/v1/user/:id
 * @access public
 */
const singleUser =(req,res)=>{
    //get user data form json db
    const user = JSON.parse(readFileSync(path.join(__dirname,'../db/users.json')));

    //find single user
    const findSingleUser = user.find(data=>data.id == req.params.id);

    if(findSingleUser){
        res.status(200).json(findSingleUser);
    }
    else{
        res.status(404).send(`404 NOT Found.`)
    }

}

/**
 * @desc Delete single User
 * @name DELETE /api/v1/user/:id
 * @access public
 */
const deleteUser =(req,res)=>{
    //get user data form json db
    const user = JSON.parse(readFileSync(path.join(__dirname,'../db/users.json')));

    if(user.some(data=>data.id == req.params.id)){

    // get delete user data 
    const deleteUserData = user.filter(data=>data.id != req.params.id);

    // delete file json
    writeFileSync(path.join(__dirname,'../db/users.json'),JSON.stringify(deleteUserData));
    res.status(200).send(`data deleted`)

    }
    else{
        res.status(404).send(`404 Not Found.`)
    }
}

/**
 * @desc Update user data
 * @name PUT/PATCH /api/v1/user/:id
 * @access public
 */
const updateUserData=(req,res)=>{
    
    //get user data form json db
    const user = JSON.parse(readFileSync(path.join(__dirname,'../db/users.json')));

    if(user.some(data=>data.id == req.params.id)){
        // update user data
        user[user.findIndex(data=>data.id == req.params.id)] = {
            ...user[user.findIndex(data=>data.id == req.params.id)],
            ...req.body
        }
        
        //update user data to json file
        writeFileSync(path.join(__dirname,"../db/users.json"),JSON.stringify(user));
        res.status(200).send(`Data Updated`);

    }else{
        res.status(404).send(`404 Not Found.`)
    }

}




//export data
module.exports = {
    getAllUser,
    createUser,
    singleUser,
    deleteUser,
    updateUserData
}