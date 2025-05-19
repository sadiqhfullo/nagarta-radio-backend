// router.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Hello from Nagarta Radio backend!');
});

module.exports = router;
