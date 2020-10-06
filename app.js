const express = require("express");
const bodyParser = require("body-parser");

const config = require("./helpers/config")();
const logger = require("./helpers/logger");

const usersRoutes = require("./routes/usersRoutes");
const deliveriesRoutes = require("./routes/deliveriesRoutes");
const sendersRoutes = require("./routes/sendersRoutes");
const couriersRoutes = require("./routes/couriersRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users/", usersRoutes);
app.use("/deliveries/", deliveriesRoutes);
app.use("/senders/", sendersRoutes);
app.use("/couriers/", couriersRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  logger(error.stack, "error");
  res
    .status(error.code || 500)
    .json({ message: error.message || "internal server error has occurred" });
});

app.listen(config.serverPort, () =>
  logger(`Server is up & listening on port ${config.serverPort}`)
);
