const Sale = require("../Model/salesModel");

// Add new sale
exports.createSale = async (req, res) => {
  try {
    const sale = await Sale.create(req.body);
    res.status(201).json(sale);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server error", error });
  }
};


exports.getSummary = async (req, res) => {
  try {
    const totalItems = await Sale.aggregate([
      { $group: { _id: null, total: { $sum: "$quantity" } } }
    ]);

    const revenue = await Sale.aggregate([
      { $group: { _id: null, total: { $sum: { $multiply: ["$price", "$quantity"] } } } }
    ]);

    const orders = await Sale.countDocuments();

    res.json({
      totalItemsSold: totalItems[0]?.total || 0,
      totalRevenue: revenue[0]?.total || 0,
      totalOrders: orders
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getMonthlySales = async (req, res) => {
  try {
    const monthly = await Sale.aggregate([
      {
        $group: {
          _id: { $month: "$date" },
          sales: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formatted = monthly.map(m => ({
      name: months[m._id - 1],
      sales: m.sales
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getTopProducts = async (req, res) => {
  try {
    const top = await Sale.aggregate([
      {
        $group: {
          _id: "$itemName",
          unitsSold: { $sum: "$quantity" },
          revenue: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
      },
      { $sort: { unitsSold: -1 } },
      { $limit: 5 }
    ]);

    res.json(top);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getSalesByCategory = async (req, res) => {
  try {
    const categories = await Sale.aggregate([
      {
        $group: {
          _id: "$category",
          sales: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
      }
    ]);

    res.json(categories.map(c => ({ category: c._id, sales: c.sales })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
