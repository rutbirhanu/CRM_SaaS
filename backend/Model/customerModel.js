const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  purchases: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Inventory" },
      quantity: { type: Number, required: true },
      priceAtPurchase: { type: Number, required: true },
      date: { type: Date, default: Date.now }
    }
  ],
  loyaltyPoints: { type: Number, default: 0 },
  totalSpent: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Customer", CustomerSchema);
