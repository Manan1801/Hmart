import pool from "../configs/postgresSQL.js";

// Get or create cart
export const getOrCreateCart = async (userId) => {
    let cart = await pool.query(
        "SELECT * FROM cart WHERE user_id = $1",
        [userId]
    );

    if (cart.rows.length === 0) {
        cart = await pool.query(
            "INSERT INTO cart (user_id) VALUES ($1) RETURNING *",
            [userId]
        );
    }

    return cart.rows[0];
};

// Add item to cart
export const addToCart = async (userId, productId, quantity) => {

    const cart = await getOrCreateCart(userId);

    const existing = await pool.query(
        "SELECT * FROM cart_items WHERE cart_id = $1 AND product_id = $2",
        [cart.id, productId]
    );

    if (existing.rows.length > 0) {
        await pool.query(
            "UPDATE cart_items SET quantity = quantity + $1 WHERE id = $2",
            [quantity, existing.rows[0].id]
        );
    } else {
        await pool.query(
            "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES ($1,$2,$3)",
            [cart.id, productId, quantity]
        );
    }
};

// Get cart items
export const getCartItems = async (userId) => {
    const result = await pool.query(`
        SELECT ci.id, p.name, p.price, ci.quantity
        FROM cart_items ci
        JOIN cart c ON ci.cart_id = c.id
        JOIN products p ON ci.product_id = p.id
        WHERE c.user_id = $1
    `, [userId]);

    return result.rows;
};