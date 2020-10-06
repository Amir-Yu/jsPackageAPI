const express = require("express");
const { paginate } = require("../helpers/pagination");
const {
  getSenders,
  addDelivery,
  getDeliveriesBySenderId,
  updateDeliveryCourierId,
} = require("../controllers/senders");
const auth = require("../helpers/auth");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.json(getSenders());
// });

// authenticated endpoints from here..
router.use(auth);

// Add Delivery
router.post("/delivery/", (req, res, next) => {
  const { packageSize, cost, description } = req.body;
  const userId = req.user.userId;
  const addedItem = addDelivery(userId, packageSize, cost, description);
  if (addedItem.success) {
    res.status(201).json({ success: addedItem.success, result: addedItem.result });
  } else {
    res.status(422).json({ success: addedItem.success, message: "can't find this senderId" });
  }
});

// Assign Delivery
router.put("/delivery/", (req, res, next) => {
  const { courierId, deliveryId } = req.body;
  const userId = req.user.userId;
  const updateResult = updateDeliveryCourierId(userId, courierId, deliveryId);
  if (updateResult.success) {
    res.json(updateResult);
  } else {
    res.status(422).json(updateResult);
  }
});

// Get Deliveries
router.get("/deliveries", (req, res, next) => {
  const queryDate = req.query.date;
  const queryPage = parseInt(req.query.page);
  const queryLimit = req.query.limit || 10;
  if (queryDate) {
    const date = new Date(queryDate);
    if (date) {
      const senderId = req.user.userId;
      const deliveriesResults = getDeliveriesBySenderId(senderId, date);
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
      res.status(422).json({ success: false, message: "can't pares 'date' parameter..." });
    }
  } else {
    res.status(422).json({ success: false, message: "'date' parameter  is mandatory!" });
  }
});

module.exports = router;
