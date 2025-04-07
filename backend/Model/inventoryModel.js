const InventorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String },
    supplier: {
      name: { type: String },
      contact: { type: String }
    },
    addedAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model("Inventory", InventorySchema);
  