require("dotenv").config();

module.exports = {
  url: process.env.DB_URL,
  port: process.env.PORT,
  secretKey: process.env.SECRET,
};
