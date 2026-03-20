import pool from "../configs/postgresSQL.js";

//Get all the products with the category name
export const getAllProducts = async () => {
    try {
        const result = await pool.query(`
            SELECT p.*, c.name AS category_name
            FROM products p
            JOIN categories c ON p.category_id = c.id
        `);
        return result.rows;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

//Get a single product by id with the category name
export const getProductById = async (id) => {
    try {
        const result = await pool.query(`
            SELECT p.*, c.name AS category_name
            FROM products p
            JOIN categories c ON p.category_id = c.id
            WHERE p.id = $1
        `, [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error fetching product by id:", error);
        throw error;
    }
};