import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";



// @desc    get user by id
// @route   GET /api/users/:id
// @access  Private

const getUserById=asyncHandler(async(req, res) => {
    
        res.send('get user by id')
})


// @desc    delete user by id
// @route   DELETE /api/users/:id
// @access  Private

const deleteUserById=asyncHandler(async(req, res) => {
    
    res.send('delete user by id')
})


// @desc    update user by id
// @route   PUT /api/users/:id
// @access  Private

const updateUserById=asyncHandler(async(req, res) => {
    
    res.send('update user by id')
})


export{

    getUserById,deleteUserById,updateUserById
}