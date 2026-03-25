import { createOrder, getOrders } from "../models/orderModel.js";

// Checkout
export const checkout = async (req, res) => {
    try {
        const userId = req.user.id;

        const order = await createOrder(userId);

        res.json({
            message: "Order placed successfully",
            order
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

// Get user orders
export const getUserOrders = async (req, res) => {
    try {
        const userId = req.user.id;

        const orders = await getOrders(userId);

        res.json(orders);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching orders" });
    }
};