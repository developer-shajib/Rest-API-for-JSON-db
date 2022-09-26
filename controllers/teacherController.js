const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

/**
 * @desc get all teacher data
 * @name GET /api/v1/teacher/
 * @access public
 */
 const getAllTeacher = (req,res)=>{
    //get teacher data from json db
    const teacher = JSON.parse(readFileSync(path.join(__dirname,'../db/teacher.json')));
    
    //send data
    res.status(200).json(teacher)
}


/**
 * @desc Create a new teacher
 * @name POST /api/v1/teacher/
 * @access public
 */
 const createTeacher =(req,res)=>{
    //get teacher data from json db
    const teacher = JSON.parse(readFileSync(path.join(__dirname,'../db/teacher.json')));

    //get body data
    const {name,sub} = req.body;

    //validation
    if(!name || !sub){
        res.status(400).send(`Name and sub are required`);
    }
    else{
        // data push to json db
        teacher.push({
            id : Math.floor(Math.random()*100000000000).toString(),
            name : name,
            sub : sub
        });
        writeFileSync(path.join(__dirname,'../db/teacher.json'),JSON.stringify(teacher));
        res.status(201).json({
            message : 'Teacher Created Successfully'
        })
    }
}


module.exports = {
    getAllTeacher,
    createTeacher
}