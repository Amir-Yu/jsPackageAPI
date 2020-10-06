const webToken = require("jsonwebtoken");

const logger = require("../helpers/logger");
const config = require("../helpers/config")();

const { getUsersData } = require("../modals/Users");

const users = getUsersData();

const getUsers = () => {
  return users;
};

const authenticateUser = (username, password) => {
  const user = users.find(user => user.userName === username);
  if (user) {
    // username found...
    if (user.password === password) {
      // username & password match ... we have a bingo!!!
      let token;
      try {
        token = webToken.sign(
          { userId: user.userId, userName: user.userName },
          config.tokenSecret,
          { expiresIn: config.tokenExpiresIn }
        );
      } catch (err) {
        throw err;
      }
      return { success: true, token: token };
    }
  }
  return { success: false };
};

module.exports.getUsers = getUsers;
module.exports.authenticateUser = authenticateUser;
