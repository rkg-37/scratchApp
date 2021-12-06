const express = require("express");
const router = express.Router();

// @describe login /landing page
// @route GET /
router.get("/", function (req, res) {
  res.send("Login");
});

// @describe Dashboard
// @route GET /dashboard
router.get("/dashboard", function (req, res) {
  res.send("dashboard");
});

module.exports = router;
