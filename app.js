require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth'); // ✅ Correct import

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Nagarta Radio Backend is running.');
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
