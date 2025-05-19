require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth'); // ✅ FIXED

app.use(express.json());

app.use('/auth', authRoutes); // ✅ USE THIS

app.get('/', (req, res) => {
  res.send('Nagarta Radio Backend is running.');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
