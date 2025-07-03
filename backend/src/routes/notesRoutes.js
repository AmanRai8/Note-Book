import express from "express";
import {
  getAllNotes,
  createANote,
  updateNote,
  deleteNote,
  getNoteById,
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createANote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
