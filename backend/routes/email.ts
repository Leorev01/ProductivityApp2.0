import express from 'express';
import sendEmail from '../controllers/emailController.js';

//configure router
const router = express.Router();

//create routes

//Send email
router.post('/send-email', sendEmail);

export default router;
