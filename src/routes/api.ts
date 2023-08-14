import express from "express";

import { notesControllers } from "../controllers/api/notes.js";

const router = express.Router();

router.get("/", notesControllers.getAllNotes);
router.get("/:id", notesControllers.getNoteById);
router.post("/", notesControllers.saveNote);
router.put("/:id", notesControllers.updateNote);
router.delete("/:id", notesControllers.deleteNote);

export default router;
