import express from "express";
import {fetchHabits} from "../controllers/habitController.js";

const router = express.Router();

// GET /api/habits - Get all habits
router.get("/", fetchHabits);

// // POST /api/habits - Create a new habit
// router.post("/", addHabit);

// // PUT /api/habits/:id - Update an existing habit
// router.put("/:id", updateHabit);

// // DELETE /api/habits/:id - Delete a habit
// router.delete("/:id", deleteHabit);

export default router;
