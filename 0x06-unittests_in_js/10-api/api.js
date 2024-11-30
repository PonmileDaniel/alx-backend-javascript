const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7865;

// Middleware for parsing JSON request body
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with regex validation for :id
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// New endpoint: GET /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// New endpoint: POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
