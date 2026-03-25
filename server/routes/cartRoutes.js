import express from "express";
import { addItem, getCart } from "../controllers/cartController.js";
import { verifyToken } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/cart/add", verifyToken, addItem);
router.get("/cart", verifyToken, getCart);

export default router;