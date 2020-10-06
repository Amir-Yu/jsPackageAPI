const express = require("express");
const { getDeliveries } = require("../controllers/deliveries");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.json(getDeliveries());
// });

module.exports = router;
