import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// Application Configuration    
const PORT = process.env.PORT || 1504;
const app = express();

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