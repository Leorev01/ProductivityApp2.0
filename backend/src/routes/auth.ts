import express from 'express'
import { registerUser, loginUser } from '../controllers/authController.js'

//configure router
const router = express.Router()

//create routers

//Register user
router.post('/register', registerUser)

//Login User
router.post('/login', loginUser)

export default router