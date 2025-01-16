const express = require('express');

const app = express();
const PORT = 7865;

// Middleware to parse JSON body
app.use(express.json());

// Route: Home
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

// Route: Cart with Numeric ID
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Route: Available Payments
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// Route: Login
app.post('/login', (req, res) => {
  const username = req.body?.userName || 'Guest';
  res.send(`Welcome ${username}`);
});

// Error Handling: Non-Matching Routes
app.use((_req, res) => {
  res.status(404).send('Not Found');
});

// Start Server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
