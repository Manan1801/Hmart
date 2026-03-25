import { getAllCategories } from "../models/categoryModel.js";

export const getCategories = async (req, res) => {
    const categories = await getAllCategories();
    res.json(categories);
};

export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    const categories = await getAllCategories();
    const category = categories.find(cat => cat.id === parseInt(id));

    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ message: "Category not found" });
    }
};