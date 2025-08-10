// api/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import notesRoutes from "../backend/src/routes/notesRoutes.js";
import rateLimiter from "../backend/src/middleware/rateLimiter.js";
import { connectDB } from "../backend/src/config/db.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

// CORS setup
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(rateLimiter);

// Routes
app.use("/api/notes", notesRoutes);

// Connect DB
connectDB();

export default app;
