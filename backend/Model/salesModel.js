const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  itemName: String,
  quantity: Number,
  price: Number,
  category: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Sale", saleSchema);
