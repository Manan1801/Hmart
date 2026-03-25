import express from "express";
import { checkout, getUserOrders } from "../controllers/orderController.js";
import { verifyToken } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/checkout", verifyToken, checkout);
router.get("/orders", verifyToken, getUserOrders);

export default router;