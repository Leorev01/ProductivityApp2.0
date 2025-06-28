const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const emailRoutes = require('./routes/email');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', emailRoutes); // Mounts all routes from /routes/email.js

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
