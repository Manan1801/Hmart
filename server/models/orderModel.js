import pool from "../configs/postgresSQL.js";

// Create order
export const createOrder = async (userId) => {

    // Get cart items
    const cartItems = await pool.query(`
        SELECT ci.product_id, ci.quantity, p.price
        FROM cart_items ci
        JOIN cart c ON ci.cart_id = c.id
        JOIN products p ON ci.product_id = p.id
        WHERE c.user_id = $1
    `, [userId]);

    if (cartItems.rows.length === 0) {
        throw new Error("Cart is empty");
    }

    // Calculate total
    let total = 0;
    cartItems.rows.forEach(item => {
        total += item.price * item.quantity;
    });

    // Create order (UPDATED columns)
    const order = await pool.query(
        `INSERT INTO orders (buyer_id, total_amount, status, payment_status)
         VALUES ($1, $2, 'pending', 'unpaid')
         RETURNING *`,
        [userId, total]
    );

    const orderId = order.rows[0].id;

    // Insert order items (UPDATED column names)
    for (let item of cartItems.rows) {
        await pool.query(
            `INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase)
             VALUES ($1, $2, $3, $4)`,
            [orderId, item.product_id, item.quantity, item.price]
        );
    }

    // Clear cart
    await pool.query(`
        DELETE FROM cart_items
        WHERE cart_id IN (
            SELECT id FROM cart WHERE user_id = $1
        )
    `, [userId]);

    return order.rows[0];
};

// Get orders
export const getOrders = async (userId) => {
    const result = await pool.query(
        `SELECT * FROM orders WHERE buyer_id = $1 ORDER BY created_at DESC`,
        [userId]
    );

    return result.rows;
};