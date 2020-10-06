const { getCouriersData } = require("../modals/users");
const { getDeliveriesData } = require("../modals/deliveries");

const deliveries = getDeliveriesData();
const couriers = getCouriersData();

const getCouriers = () => {
  return couriers;
};

const getDeliveriesByCourierId = (courierId, date) => {
  return deliveries.filter(
    item => item.courierId === courierId && item.date.valueOf() === date.valueOf()
  );
};

const getRevenueByCourierId = (courierId, fromDate, toDate) => {
  return deliveries
    .filter(
      item =>
        item.courierId === courierId &&
        item.date.valueOf() >= fromDate.valueOf() &&
        item.date.valueOf() <= toDate.valueOf()
    )
    .reduce((sum, curr) => (sum += curr.cost), 0);
};

module.exports.getCouriers = getCouriers;
module.exports.getDeliveriesByCourierId = getDeliveriesByCourierId;
module.exports.getRevenueByCourierId = getRevenueByCourierId;
