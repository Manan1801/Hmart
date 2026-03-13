import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Access denied" });
    }

    try {

        const decoded = jwt.verify(token.split(" ")[1], "SECRET_KEY");

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }

};