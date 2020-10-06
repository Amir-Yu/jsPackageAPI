const webToken = require("jsonwebtoken");
const config = require("./config")();

module.exports = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Authentication failed!" });
    }
    if (token.indexOf(" ")) {
      token = token.split(" ")[1];
    }
    const decodedToken = webToken.verify(token, config.tokenSecret);
    req.user = { userId: decodedToken.userId };
    next();
  } catch (err) {
    return next(err);
  }
};
