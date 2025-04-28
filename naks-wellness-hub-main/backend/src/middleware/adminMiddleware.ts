import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./authMiddleware";  // Ensure this import path is correct

// Middleware to check if the user is an admin
export const adminOnly = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  if (req.user?.isAdmin) {
    return next(); // Proceed to the next middleware or route handler
  } else {
    // Respond with a 403 status, no need to return the response
    res.status(403).json({ message: "Access denied, admin only" });
  }
};
