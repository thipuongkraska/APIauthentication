const jwt = require("jsonwebtoken");
const env = require("../config/env");
const {secretKey} = env;

const verifyToken = (token) => {
  const result = jwt.verify(token, secretKey);
  return result;
}

module.exports = verifyToken;
