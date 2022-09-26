const express = require('express');
const { getAllTeacher, createTeacher } = require('../controllers/teacherController');

//init router
const router = express.Router();

//create router
router.route('/').get(getAllTeacher).post(createTeacher)

//export router
module.exports = router;