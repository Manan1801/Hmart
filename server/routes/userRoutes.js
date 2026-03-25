import express from 'express';
import {userController, homeController} from '../controllers/userController.js';
import { getCart } from "../controllers/cartController.js";
import { verifyToken } from "../middleware/authmiddleware.js";


const router = express.Router();


router.get("/cart", getCart);
router.get("/cart", verifyToken, getCart);




export default router;