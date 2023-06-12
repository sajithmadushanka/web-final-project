const express = require('express');
const router = express.Router();
const Item = require('../models/items');

router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
