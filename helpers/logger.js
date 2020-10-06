const levels = {
  error: { color: "red", colorCode: "\033[31m" },
  warning: { color: "yellow", colorCode: "\033[33m" },
  info: { color: "green", colorCode: "\033[32m" },
  debug: { color: "white", colorCode: "\033[37m" },
};
const colorReset = "\033[0m";

module.exports = (message, type = "info") => {
  const textColor = levels[type].colorCode;
  console.log(`${textColor} ${new Date().toUTCString()} [${type}] ::: ${message} ${colorReset}`);
};
