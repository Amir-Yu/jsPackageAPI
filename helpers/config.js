const config = {
  serverPort: process.env.serverport || 8080,
  tokenSecret: "flgf;rcrerce0t945iesdfestrey65654k43l;4",
  tokenExpiresIn: "1h",
};

module.exports = () => {
  return config;
};
