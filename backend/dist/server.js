import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/auth.js";
import connectDB from './src/db.js';
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/auth", authRoutes);
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'none'; script-src 'self' blob:;");
    next();
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
