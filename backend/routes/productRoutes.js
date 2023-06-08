import express from "express";
const router = express.Router();
import { getAllProducts,getSingleProduct } from "../controllers/productControllers.js";




router.route('/').get(getAllProducts)

router.route('/:id').get(getSingleProduct)

export default router;
