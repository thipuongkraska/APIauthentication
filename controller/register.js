const Model = require("../models/Model");
const bcrypt = require("bcrypt");
const encodedToken = require("../constant/encodedToken");
const env = require("../config/env");
const {secretKey} = env;


const register = async (req,res,next) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const hashPassword = bcrypt.hash(password,2);
    const existUser = await Model.findOne({"local.email": email});
    if (existUser) {
      throw new HttpError("Acc already exist");
    };


    const newUser = new Model({
      method: "local",
      username: username,
      local: {
        email: email,
        password: hashPassword,
      }
    });

    await newUser.save();

    const header = {
      algorithm: "HS256",
      expiresIn: tokenLife,
    };
    const token = await encodedToken(header, newUser, secretKey);
    res.json({
      message: "success",
      user: username,
      data: token,
    });

  } catch(error) {
    next(error);
  };
};

module.exports = register;
