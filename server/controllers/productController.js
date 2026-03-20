export const getProducts = async (req, res) => {
    const { category } = req.query;

    let products;

    if (category) {
        const result = await pool.query(`
            SELECT p.*, c.name AS category
            FROM products p
            JOIN categories c ON p.category_id = c.id
            WHERE c.name = $1
        `, [category]);

        products = result.rows;
    } else {
        products = await getAllProducts();
    }

    res.json(products);
};