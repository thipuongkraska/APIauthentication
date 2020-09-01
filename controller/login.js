const Model = require("../models/Model");
const bcrypt = require("bcrypt");
const encodedToken = require("../constant/encodedToken");
const env = require("../config/env");
const {secretKey} = env;

const HttpError = require("../constant/HttpError");

const login = async (req,res,next) => {
  try {
    const {email,password} = req.value.body;
    const foundUser = await Model.findOne({"local.email": email});
    if (foundUser) {
      const resultCompare = await bcrypt.compare(password, "local.password", async function(err) {
        if(err) {
          throw new HttpError("Email or Passwor incorrect", 401);
        } else {
          const foundUserObject = foundUser.toObject();
          const token = await encodedToken(foundUserObject);
          res.setHeader("token", token);
          return res.json({
            message: "successfully login",
            username: foundUser.username
          });
        };
      });
    } else {
      throw new HttpError("Email or Passwor incorrect", 401);
    };
  }
  catch(error) {
    console.log(error);
    next(error);
  };
};

module.exports = login;
