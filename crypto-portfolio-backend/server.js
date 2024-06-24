// crypto-portfolio-backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/crypto', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const usersRouter = require('./api/users');
app.use('/api/users', usersRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
