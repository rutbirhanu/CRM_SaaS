const express = require("express");
const router = express.Router();
const {
  createSale,
  getSummary,
  getMonthlySales,
  getTopProducts,
  getSalesByCategory
} = require("../controllers/salesController");

router.post("/add", createSale);
router.get("/summary", getSummary);
router.get("/monthly", getMonthlySales);
router.get("/top-products", getTopProducts);
router.get("/category-sales", getSalesByCategory);

module.exports = router;
