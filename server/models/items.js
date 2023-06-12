const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Image: {
    data: Buffer,
    contentType: String
  }
});

const ItemModel = mongoose.model('Item', itemSchema);
module.exports = ItemModel;
