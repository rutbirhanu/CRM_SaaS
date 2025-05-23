const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    price: { type: String, required: true },
    stock: { type: String, required: true },
    category: { type: String },
    addedAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model("Inventory", InventorySchema);
  