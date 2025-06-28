import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Sample route
app.post('/api/send-email', (req, res) => {
  const { email, habits } = req.body;
  // TODO: Implement email sending logic here
  console.log('Sending email to:', email, 'with habits:', habits);
  res.json({ success: true });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
