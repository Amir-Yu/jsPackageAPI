const { v3: uuidv3 } = require("uuid");

class User {
  constructor(userName, password, userType) {
    this.userId = uuidv3(`${userName}${password}${userType}`, uuidv3.URL);
    this.userName = userName;
    this.password = password;
    this.userType = userType;
  }
}

class Sender extends User {
  constructor(userName, password, companyName) {
    super(userName, password, "sender");
    this.companyName = companyName;
  }
}

class Courier extends User {
  constructor(userName, password, firstName, lastName, phoneNumber, vehicleType) {
    super(userName, password, "courier");
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.vehicleType = vehicleType;
  }
}

const users = [
  new Sender("sender1", "123456", "wowLTD"),
  new Sender("sender2", "123456", "SendersExpress!"),
];
users.push(
  new Courier("courier1", "123456", "cr", "er", "050888999", "suntung 125"),
  new Courier("courier2", "654321", "jony", "mcQuick", "050888999", "suntung 250")
);

const getUsers = () => {
  return users;
};

const getSenders = () => {
  return users.filter(item => item.userType === "sender");
};

const getCouriers = () => {
  return users.filter(item => item.userType === "courier");
};

module.exports.getUsersData = getUsers;
module.exports.getSendersData = getSenders;
module.exports.getCouriersData = getCouriers;
