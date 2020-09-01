const joi = require("@hapi/joi");

const registerSchema = joi.object({
  method: joi.string(),
  username: joi.string().required(),
  email: joi
    .string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: joi.string().required().min(6),
  repeatpassword: joi.string().required(),
});

module.exports = registerSchema;
