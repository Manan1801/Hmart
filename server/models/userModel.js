import pool from "../configs/postgresSQL.js";

// Function to create a new user
export const createUser = async(name,email,password_hash,phone,role)=>{
    const query = 
    `INSERT INTO users (name, email, password_hash, phone, role)
     VALUES($1, $2, $3, $4, $5) RETURNING id,name,email`;
    const values = [name,email,password_hash,phone,role];

    const result = await pool.query(query, values);
    return result.rows[0];
};

// Function to get a user by email
export const getUserByEmail = async(email)=>{
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await pool.query(query,[email]);
    return result.rows[0];
};