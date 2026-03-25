import { getAllProducts, getProductById } from "../models/productModel.js";

// Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching products" });
    }
};

// Get single product
export const getSingleProduct = async (req, res) => {
    try {
        const product = await getProductById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching product" });
    }
};