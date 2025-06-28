import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRoutes from './routes/email.js';
import habitRoutes from './routes/habits.js';
import authRoutes from './routes/auth.js';

//Load environment variables
dotenv.config();
const app = express();

//Use cors to accept requests from frontend(localhost:3000)
app.use(cors());
app.use(express.json());

//Mount routes
app.use('/api/email', emailRoutes); 
app.use('/api/habits', habitRoutes);
app.use('/api/auth', authRoutes);

//create port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
