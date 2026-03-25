import express from 'express';
import {userController, homeController} from '../controllers/userController.js';
import { getCart } from "../controllers/cartController.js";
import { verifyToken } from "../middleware/authmiddleware.js";


const router = express.Router();

// Define routes for user-related operations
// router.get('/products', userController);
// router.get('/product/:id', userController);
// router.get('/cart', cartController);
router.get("/cart", getCart);
router.get("/cart", verifyToken, getCart);
// router.post('/checkout', checkoutController);
// router.get('/orders', ordersController);
// router.get('/profile', profileController);
// router.post('/update-profile', updateProfileController);
// router.post('/change-password', changePasswordController);
// router.post('/logout', logoutController);
// router.get('/', homeController);



export default router;