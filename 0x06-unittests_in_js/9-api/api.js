const express = require('express');

const app = express();
const PORT = 7865;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with regex validation for :id
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
