import express from "express";
import {fetchHabit, fetchAllHabits} from "../controllers/habitController.js";

//Create router
const router = express.Router();

// Create Routes

// GET /api/habits - Get a habits
router.get("/", fetchHabit);

// GET /api/habits - Get a habits
router.get("/all", fetchAllHabits);

// // POST /api/habits - Create a new habit
// router.post("/", addHabit);

// // PUT /api/habits/:id - Update an existing habit
// router.put("/:id", updateHabit);

// // DELETE /api/habits/:id - Delete a habit
// router.delete("/:id", deleteHabit);

export default router;
