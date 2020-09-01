const jwt = require("jsonwebtoken");
const env = require("../config/env");
const {secretKey} = env;

const encodedToken = (data) => {
  const token = jwt.sign(data, secretKey, { expiresIn: '1h' });
  return token;
};

module.exports = encodedToken;
