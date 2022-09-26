const express = require('express');
const { getAllUser, createUser, singleUser, deleteUser, updateUserData } = require('../controllers/userController');

//init router
const router = express.Router();

//create a router
router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(singleUser).delete(deleteUser).put(updateUserData).patch(updateUserData)

//export router
module.exports = router;


/**
 * 
 */