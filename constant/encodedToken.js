const jwt = require("jsonwebtoken");
// const env = require("../config/env");
// const {secretKey} = env;

const encodedToken = (header, payload, secret) => {
  const headerEncode = base64urlEncode(header);
  const payloadEncode = base64urlEncode(payload);
  const data = headerEncode + "." + payloadEncode;
  const hashData = Hash(data, secret);
  const signature = base64urlEncode(hashData);

  return headerEncode + "." + payloadEncode + "." + signature;
};

module.exports = encodedToken;
