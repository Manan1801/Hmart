import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, getUserByEmail } from "../models/userModel.js";

const JWT_SECRET = "supersecret";

export const register = async (req, res) => {
  try {

    const { name, email, password, phone } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const role = "customer"; // Default role for new users

    const user = await createUser(name, email, hashedPassword,role, phone);

    res.status(201).json({
      message: "User registered",
      user
    });

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Registration failed" });

  }
};

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {

    res.status(500).json({ error: "Login failed" });

  }

};