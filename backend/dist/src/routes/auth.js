import { Router } from "express";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../utils/hash.js";
import { randomUUID } from "crypto";
import User from "../models/user.js";
import { protect } from "../middleware/authMiddleware.js";
import nodemailer from 'nodemailer'; // For sending email
import { adminOnly } from "../middleware/adminMiddleware.js"; // Admin role middleware
const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// ==========================
// Register Route
// ==========================
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "Registered successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
// ==========================
// Login Route
// ==========================
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        const token = jwt.sign({ id: user._id, email: user.email, isAdmin: user.isAdmin }, // Added isAdmin field
        JWT_SECRET, { expiresIn: "1d" });
        res.status(200).json({ token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
// ==========================
// Forgot Password Route
// ==========================
router.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "No user found with that email" });
            return;
        }
        const resetToken = randomUUID(); // Generate a unique reset token
        user.resetToken = resetToken; // Save the reset token in the user's record
        await user.save();
        // Send email with reset token
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        await transporter.sendMail({
            to: email,
            subject: "Password Reset",
            text: `You requested a password reset. Use this link to reset your password: http://your-app.com/reset-password?token=${resetToken}`,
        });
        res.status(200).json({ message: "Password reset link sent to email" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
// ==========================
// Reset Password Route
// ==========================
router.post("/reset-password", async (req, res) => {
    const { token, newPassword } = req.body;
    try {
        const user = await User.findOne({ resetToken: token });
        if (!user) {
            res.status(400).json({ message: "Invalid or expired reset token" });
            return;
        }
        const hashedPassword = await hashPassword(newPassword);
        user.password = hashedPassword;
        user.resetToken = undefined; // Clear the reset token after password is reset
        await user.save();
        res.status(200).json({ message: "Password reset successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
// ==========================
// Protected Profile Route
// ==========================
router.get("/profile", protect, async (req, res) => {
    const user = req.user;
    res.status(200).json({ user });
});
// ==========================
// Admin-Only Route Example
// ==========================
router.get("/admin", protect, adminOnly, async (req, res) => {
    try {
        res.status(200).json({ message: "Welcome to the admin panel" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
export default router;
