const express = require("express");
const router = express.Router();

const {
   addCustomer,
   getAllCustomers,
   getCustomerById,
   updateCustomer,
   addPurchase,
   deleteCustomer,
   redeemLoyaltyPoints,
} = require("../Controller/customerController");


router.post("/", addCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.get("loyality/:id", redeemLoyaltyPoints);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);
router.post("/:id/purchase", addPurchase);

module.exports = router;
