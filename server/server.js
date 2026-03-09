import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pool from './configs/postgresSQL.js';

// Application Configuration    
const PORT = process.env.PORT || 1504;
const app = express();
await pool.connect().then(() => console.log('Connected to PostgreSQL database'))
.catch(err => console.error('Error connecting to PostgreSQL database:', err));

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});