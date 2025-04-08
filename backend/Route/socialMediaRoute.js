const express = require("express");
const router = express.Router();

const {generateToken, generateUrl} = require("../Controller/socialMediaController")


router.route("/redirect").get(generateToken)
router.route("/generate-url").get(generateUrl)

module.exports = router;
