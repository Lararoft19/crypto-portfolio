const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const portfolioRouter = require('./api/portfolio');
app.use('/api/portfolio', portfolioRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

