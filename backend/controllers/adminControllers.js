import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";



// @desc    get user by id
// @route   GET /api/admin/:id
// @access  Private

const getUserById=asyncHandler(async(req, res) => {
    
        res.send('get user by id')
})


// @desc    delete user by id
// @route   DELETE /api/admin/:id
// @access  Private

const deleteUserById=asyncHandler(async(req, res) => {
    
    res.send('delete user by id')
})


// @desc    update user by id
// @route   PUT /api/admin/:id
// @access  Private

const updateUserById=asyncHandler(async(req, res) => {
    
    res.send('update user by id')
})



// @desc    update order to be delivered
// @route   PUT /api/admin/orders/:id/delivered
// @access  Private


const  updateOrderToDelivered=asyncHandler(async(req, res) => {
    
    res.send('update order to be delivered')
})


// @desc    get all orders
// @route   GET /api/admin/orders/allorders
// @access  Private


const  getAllOrders=asyncHandler(async(req, res) => {
    
    res.send('get all orders')
})



export{

    getUserById,deleteUserById,updateUserById,updateOrderToDelivered,getAllOrders
}