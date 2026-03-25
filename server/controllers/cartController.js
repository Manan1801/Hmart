import { addToCart, getCartItems } from "../models/cartModel.js";

// Add to cart
export const addItem = async (req, res) => {
    try {
        const userId = req.user.id;
        const { product_id, quantity } = req.body;

        await addToCart(userId, product_id, quantity);

        res.json({ message: "Item added to cart" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding to cart" });
    }
};

// Get cart
export const getCart = async (req, res) => {
    try {
        const userId = req.user.id;

        const items = await getCartItems(userId);

        res.json(items);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching cart" });
    }
};