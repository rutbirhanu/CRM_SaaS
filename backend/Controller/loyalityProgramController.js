const Customer = require("../Model/customerModel")

export const redeemPoints = async (req, res) => {
    const { customerId, pointsToRedeem } = req.body;
  
    try {
      const customer = await Customer.findById(customerId);
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
  
      if (customer.loyaltyPoints < pointsToRedeem) {
        return res.status(400).json({ message: 'Not enough points to redeem' });
      }
  
      customer.loyaltyPoints -= pointsToRedeem;
      await customer.save();
  
      res.status(200).json({ message: 'Points redeemed successfully', customer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  export const getCustomersWhoRedeemedPoints = async (req, res) => {
    try {
      // Fetch customers who have loyaltyPoints less than some max value (e.g., < starting value)
      const redeemedCustomers = await Customer.find({ loyaltyPoints: { $lt: 1000 } }) 
  
      res.status(200).json(redeemedCustomers);
    } catch (err) {
      console.error("Error fetching redeemed customers:", err);
      res.status(500).json({ message: "Failed to fetch redeemed customers" });
    }
  };