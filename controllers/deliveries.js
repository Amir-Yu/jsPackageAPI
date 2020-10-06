const { getDeliveriesData } = require("../modals/deliveries");

const deliveries = getDeliveriesData();

const getDeliveries = () => {
  return deliveries;
};

module.exports.getDeliveries = getDeliveries;
