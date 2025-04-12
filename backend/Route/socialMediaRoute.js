const express = require("express");
const router = express.Router();

const {generateToken, generateUrl,  getYouTubeAnalytics} = require("../Controller/socialMediaController")


router.route("/redirect").get(generateToken)
router.route("/generate-url").get(generateUrl)
router.route("/stat").get(getYouTubeAnalytics)

module.exports = router;
