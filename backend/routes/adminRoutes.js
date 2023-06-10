import express from "express";
const router = express.Router();
import {deleteUserById,getUserById,updateUserById } from "../controllers/adminControllers.js";
import { admin,protect } from "../middleware/authMiddleware.js";



router.route('/:id').get(protect,admin,getUserById).delete(protect,admin,deleteUserById).put(protect,admin,updateUserById)





export default router;
