import { Router } from "express";
import {
  create,
  deleteNote,
  getNotes,
  getSingleNote,
  updateSingleNote,
} from "../controllers/note";

const router = Router();

router.post("/create", create);

router.patch("/:noteId", updateSingleNote);

router.delete("/:noteId", deleteNote);

router.get("/", getNotes);

router.get("/:id", getSingleNote);

export default router;
