const { getSendersData, getCouriersData } = require("../modals/users");
const { getDeliveriesData, createDelivery } = require("../modals/deliveries");

const deliveries = getDeliveriesData();
const senders = getSendersData();
const couriers = getCouriersData();

const getSenders = () => {
  return senders;
};
const addDelivery = (userId, packageSize, cost, description) => {
  if (senders.find(sender => sender.userId === userId)) {
    const newItem = createDelivery(userId, packageSize, cost, description);
    deliveries.push(newItem);
    return { success: true, result: newItem };
  }
  return { success: false };
};

const getDeliveriesBySenderId = (senderId, date) => {
  return deliveries.filter(
    item => item.senderId === senderId && item.date.valueOf() === date.valueOf()
  );
};

const updateDeliveryCourierId = (senderId, courierId, deliveryId) => {
  const sender = senders.filter(item => item.userid === senderId);
  if (!sender) {
    return { success: false, message: "can't find this sender" };
  }
  const delivery = deliveries.filter(
    item => item.senderId === senderId && item.deliveryId === deliveryId
  );
  if (!delivery) {
    return { success: false, message: "can't find delivery for this sender" };
  }
  const courier = couriers.filter(item => item.userId === courierId);
  if (!courier) {
    return { success: false, message: "can't find this courier" };
  }
  const assignedDeliveries = deliveries.filter(
    item => item.courierId === courierId && item.date.valueOf() === delivery.date.valueOf()
  );
  if (assignedDeliveries.length === 5) {
    return { success: false, message: "courier reach his max delivery amount for this date" };
  }
  // if we made it to here....
  delivery.courierId = courierId;
  return { success: true, result: delivery };
};

module.exports.getSenders = getSenders;
module.exports.addDelivery = addDelivery;
module.exports.getDeliveriesBySenderId = getDeliveriesBySenderId;
module.exports.updateDeliveryCourierId = updateDeliveryCourierId;
