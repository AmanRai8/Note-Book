import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/RateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server started on port:", PORT);
  });
});
