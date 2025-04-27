const express = require("express")
const { getCustomersWhoRedeemedPoints, redeemPoints } = require("../Controller/loyalityProgramController")

const router = express.Router()

router.get('/redeemed-customers', getCustomersWhoRedeemedPoints)
router.get("/redeem-point", redeemPoints)