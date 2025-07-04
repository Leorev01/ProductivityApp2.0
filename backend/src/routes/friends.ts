import express from "express"
import {fetchFriends} from "../controllers/friendController"

//configure router
const router = express.Router()

//routes

//get all friends
router.get('/friends', fetchFriends)

export default router
