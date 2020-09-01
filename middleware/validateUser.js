const joi = require("@hapi/joi");
const HttpError = require("../constant/HttpError");

const validateUser = (schema) => { return function (req,res,next)
  {
    const {value, error} = schema.validate(req.body);
    if (error) {
      console.log(error);
      throw new HttpError("Invalid",401);
      // res.send("Invalid");
    };

    if(!req.value) {
      req.value = {};
    };
    if(!req.value.body) {
      req.value.body = value;
    };

    next();
  };
};

module.exports = validateUser;
