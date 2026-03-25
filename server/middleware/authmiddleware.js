import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET; // ✅ same as login

export const verifyToken = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Access denied" });
    }

    try {
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, JWT_SECRET); // ✅ FIXED

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }

};