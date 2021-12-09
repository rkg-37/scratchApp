const express = require("express");
const router = express.Router();

// @describe login /landing page
// @route GET /
router.get("/", function (req, res) {
  res.render("Login");
});

// @describe Dashboard
// @route GET /dashboard
router.get("/dashboard", function (req, res) {
  res.render("dashboard");
});

module.exports = router;
