import express from "express";
const router = express.Router();
import {createNewOrder,getMyOrders,getMyOrdersById,getMyOrdersDetailsById } from "../controllers/orderControllers.js";
import { protect } from "../middleware/authMiddleware.js";





router.route('/').post(protect,createNewOrder) 

router.route('/myorders').get(protect,getMyOrders)  

router.route('/:id').get(protect,getMyOrdersById)  

router.route('/:id/orderDetails').get(protect,getMyOrdersDetailsById) 

export default router;
