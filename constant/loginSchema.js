const joi = require("@hapi/joi");

const loginSchema = joi.object({
  method: joi.string(),
  email: joi
    .string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: joi.string().required().min(6),
});

module.exports = loginSchema;
