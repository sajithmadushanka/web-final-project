const express = require('express');
const Item = require('../models/items');
const User = require('../models/user');
const router = express.Router();
const multer = require('multer');
const authz = require('../middleware/auth');


// Create a storage engine for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST method
router.post('/addItem/:title/:price/:description', upload.single('image'), async (req, res) => {
  const { title, price, description } = req.params;

  const item = new Item({
    Title: title,
    Price: price,
    Description: description,
    Image: {
      data: req.file.buffer,
      contentType: req.file.mimetype
    }
  });

  try {
    await item.save();
    res.status(201).send(item);
  } catch (e) {
    res.status(400).send(e);
  }
});

//---------------------------------------------------------------------------


module.exports = router;
