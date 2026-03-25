import pool from "../configs/postgresSQL.js";

export const getAllCategories = async () => {
    const result = await pool.query("SELECT * FROM categories");
    return result.rows;
};