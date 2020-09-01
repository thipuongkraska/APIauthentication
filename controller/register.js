const Model = require("../models/Model");
const bcrypt = require("bcrypt");
const encodedToken = require("../constant/encodedToken");
const env = require("../config/env");
const {secretKey} = env;

const HttpError = require("../constant/HttpError");


const register = async (req,res,next) => {
  try {
    const {username, email, password, repeatpassword} = req.value.body;

    const existUser = await Model.findOne({"local.email": email});
    if (existUser) {
      throw new HttpError("Acc already exist", 401);
    } else {
      if(password===repeatpassword) {
        const hashPassword = await bcrypt.hash(password,2);

        const newUser = new Model({
          method: "local",
          username: username,
          local: {
            email: email,
            password: hashPassword,
          }
        });

        await newUser.save();
        const data = newUser.toObject();
        const token = await encodedToken(data);
        res.setHeader("token", token);
        return res.json({
          message: "success",
          user: username
        });
      } else {
        throw new HttpError("Email or password is incorrect", 401);
      };
    };

  } catch(error) {
    console.log(error);
    next(error);
  };
};

module.exports = register;
