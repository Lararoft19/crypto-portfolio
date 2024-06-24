const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Get all portfolios
router.get('/', async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.json(portfolios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new portfolio
router.post('/', async (req, res) => {
  const portfolio = new Portfolio({
    name: req.body.name,
    value: req.body.value,
  });

  try {
    const newPortfolio = await portfolio.save();
    res.status(201).json(newPortfolio);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

