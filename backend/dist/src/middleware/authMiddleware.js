import jwt from "jsonwebtoken";
import User from "../models/user.js";
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
export const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next(); // ✅ important: just call next()
        }
        catch (error) {
            if (error instanceof Error && error.name === "TokenExpiredError") {
                res.status(401).json({ message: "Token expired" });
            }
            else {
                console.error(error);
                res.status(401).json({ message: "Not authorized, token failed" });
            }
        }
    }
    else {
        res.status(401).json({ message: "Not authorized, no token" });
    }
};
