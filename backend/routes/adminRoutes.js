import express from "express";
const router = express.Router();
import {deleteUserById,getUserById,updateUserById,getAllOrders,updateOrderToDelivered } from "../controllers/adminControllers.js";
import { admin,protect } from "../middleware/authMiddleware.js";




router.route('/:id').get(protect,admin,getUserById).delete(protect,admin,deleteUserById).put(protect,admin,updateUserById)


router.route('/orders/:id/delivered').put(protect,admin,updateOrderToDelivered)


router.route('/orders/allorders').get(protect,admin,getAllOrders)


export default router;
