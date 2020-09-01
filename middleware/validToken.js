const verifyToken = require("../constant/verifyToken");

const validToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const valid = await verifyToken(token);
    next();
  }
  catch(error) {
    console.log(error);
    next(error);
  };


}

module.exports = validToken;
