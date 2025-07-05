import express from "express"
import {fetchFriends} from "../controllers/friendController.js"

//configure router
const router = express.Router()

//routes

//get all friends
router.get('/', fetchFriends)

export default router
