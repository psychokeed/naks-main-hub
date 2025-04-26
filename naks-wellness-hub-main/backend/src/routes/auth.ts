import { Router } from "express";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { users, User } from "../models/user.js";
import { hashPassword, comparePassword } from "../utils/hash.js";
import { randomUUID } from "crypto";

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";


router.post("/register", async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;
  const existing = users.find((u) => u.email === email);
  if (existing) { await res.status(400).json({ message: "User already exists" }); return; }

  const hashed = await hashPassword(password);
  const newUser: User = { id: randomUUID(), name, email, password: hashed };
  users.push(newUser);
  res.status(201).json({ message: "Registered successfully" });
});

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) { await res.status(400).json({ message: "Invalid credentials" }); return; }

  const valid = await comparePassword(password, user.password);
  if (!valid) { await res.status(400).json({ message: "Invalid credentials" }); return; }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1d",
  });

  res.status(200).json({ token });
});

export default router;
