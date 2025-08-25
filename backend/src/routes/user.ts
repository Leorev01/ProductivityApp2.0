import express from "express";
import {fetchUser, fetchAllUsers} from "../controllers/userController.js";

//Create router
const router = express.Router();

// Create Routes

// GET /api/user - Get a specific user
router.get("/", fetchUser);

// GET /api/user - Get all users
router.get("/all", fetchAllUsers);

// // POST /api/user - Create a new user
// router.post("/", adduser);

// // PUT /api/user/:id - Update an existing user
// router.put("/:id", updateuser);

// // DELETE /api/user/:id - Delete a user
// router.delete("/:id", deleteuser);

export default router;