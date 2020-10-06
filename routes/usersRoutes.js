const express = require("express");
const { getUsers, authenticateUser } = require("../controllers/users");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.json(getUsers());
// });

router.post("/authenticate", (req, res, next) => {
  const { userName, password } = req.body;
  res.json(authenticateUser(userName, password));
});

module.exports = router;
