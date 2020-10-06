const { v4: uuidv4 } = require("uuid");

class Delivery {
  constructor(packageSize, cost, description, date) {
    this.deliveryId = uuidv4();
    this.packageSize = packageSize;
    this.cost = cost;
    this.description = description;
    this.date = date;
  }
}

class PackageSize {
  constructor(w, h, d) {
    this.w = w;
    this.h = h;
    this.d = d;
  }
}

const deliveries = [
  new Delivery(new PackageSize(1, 1, 1), 12, "1st Delivery", new Date(2020, 08, 29)),
  new Delivery(new PackageSize(1, 1, 1), 657, "2nd Delivery", new Date(2020, 08, 29)),
  new Delivery(new PackageSize(1, 1, 1), 8.65, "3th Delivery", new Date(2020, 08, 29)),
  new Delivery(new PackageSize(1, 1, 1), 57, "4th Delivery", new Date(2020, 08, 28)),
  new Delivery(new PackageSize(1, 1, 1), 99.99, "5th Delivery", new Date(2020, 08, 28)),
  new Delivery(new PackageSize(1, 1, 1), 2.34, "6th Delivery", new Date(2020, 08, 28)),
];

const getDeliveriesData = () => {
  return deliveries;
};

const createDelivery = (senderId, packageSize, cost, description) => {
  const newItem = new Delivery(packageSize, cost, description, new Date());
  newItem.senderId = senderId;
  return newItem;
};

module.exports.getDeliveriesData = getDeliveriesData;
module.exports.createDelivery = createDelivery;
