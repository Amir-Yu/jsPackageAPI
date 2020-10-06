const express = require("express");
const { paginate } = require("../helpers/pagination");
const {
  getCouriers,
  getDeliveriesByCourierId,
  getRevenueByCourierId,
} = require("../controllers/couriers");
const auth = require("../helpers/auth");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.json(getCouriers());
// });

// authenticated endpoints from here..
router.use(auth);

// Get Deliveries
router.get("/deliveries", (req, res, next) => {
  const courierId = req.user.userId;
  const queryDate = req.query.date;
  const queryPage = parseInt(req.query.page);
  const queryLimit = req.query.limit || 10;
  if (queryDate) {
    const date = new Date(queryDate);
    if (date) {
      const deliveriesResults = getDeliveriesByCourierId(courierId, date);
      if (!isNaN(queryPage)) {
        res.json({
          success: true,
          date: date,
          result: paginate(deliveriesResults, queryPage, queryLimit),
          page: queryPage,
          limit: queryLimit,
          total: deliveriesResults.length,
        });
      } else {
        res.json({
          success: true,
          date: date,
          result: deliveriesResults,
          total: deliveriesResults.length,
        });
      }
    } else {
      res.status(422).json({ success: false, message: "can't parse 'date' parameter..." });
    }
  } else {
    res.status(422).json({ success: false, message: "'date' parameter is mandatory!" });
  }
});

// Courier Revenue
router.get("/revenue", (req, res, next) => {
  const courierId = req.user.userId;
  const queryFromDate = req.query.fromdate;
  const queryToDate = req.query.todate;
  if (queryFromDate && queryToDate) {
    const fromDate = new Date(queryFromDate);
    const toDate = new Date(queryToDate);
    if (fromDate < toDate < new Date()) {
      const revenueResult = getRevenueByCourierId(courierId, fromDate, toDate);
      res.json({
        success: true,
        from_date: fromDate,
        to_date: toDate,
        result: revenueResult,
      });
    } else {
      res.status(422).json({ success: false, message: "invalid dates range" });
    }
  } else {
    res
      .status(422)
      .json({ success: false, message: "fromdate & todate parameters are mandatory!" });
  }
});
module.exports = router;
