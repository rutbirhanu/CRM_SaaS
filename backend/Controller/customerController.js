const Customer = require("../Model/customerModel");
const Inventory = require("../Model/inventoryModel");

// ✅ Add a new customer
const addCustomer = async (req, res) => {
  try {
    const { name, phone } = req.body;

    let customer = await Customer.findOne({ phone });
    if (customer) {
      return res.status(400).json({ message: "Customer already exists" });
    }

    customer = new Customer({ name, phone });
    await customer.save();

    res.status(201).json({ message: "Customer added successfully", customer });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate("purchases.productId");
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Get a single customer by ID
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).populate("purchases.productId");
    if (!customer) return res.status(404).json({ message: "Customer not found" });

    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Update customer details
const updateCustomer = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      { name, phone },
      { new: true }
    );

    if (!customer) return res.status(404).json({ message: "Customer not found" });

    res.status(200).json({ message: "Customer updated successfully", customer });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Add a purchase for a customer
const addPurchase = async (req, res) => {
  try {
    const { customerId, productId, quantity } = req.body;

    const customer = await Customer.findById(customerId);
    const product = await Inventory.findById(productId);

    if (!customer) return res.status(404).json({ message: "Customer not found" });
    if (!product) return res.status(404).json({ message: "Product not found" });

    const totalPrice = product.price * quantity;

    const newPurchase = {
      productId,
      quantity,
      price: totalPrice,
    };

    customer.purchases.push(newPurchase);
    customer.totalSpent += totalPrice;
    customer.loyaltyPoints += Math.floor(totalPrice / 10); // 1 point per $10 spent

    await customer.save();

    res.status(200).json({ message: "Purchase added", customer });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Delete a customer
const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });

    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Redeem loyalty points
const redeemLoyaltyPoints = async (req, res) => {
  try {
    const { customerId, pointsToRedeem } = req.body;
    const customer = await Customer.findById(customerId);

    if (!customer) return res.status(404).json({ message: "Customer not found" });

    if (customer.loyaltyPoints < pointsToRedeem) {
      return res.status(400).json({ message: "Not enough loyalty points" });
    }

    customer.loyaltyPoints -= pointsToRedeem;
    await customer.save();

    res.status(200).json({ message: "Points redeemed", customer });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  addPurchase,
  deleteCustomer,
  redeemLoyaltyPoints,
};
