import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRoutes from './routes/email.js';
import habitRoutes from './routes/habits.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/email', emailRoutes); // Mounts all routes from /routes/email.js
app.use('/api/habits', habitRoutes); // Mounts all routes from /routes/habits.js

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
