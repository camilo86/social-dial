const Joi = require('joi');

const loginSchema = Joi.object().keys({
  name: Joi.string().max(35),
  email: Joi.string().email(),
  phone: Joi.string(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  repeatPassword: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
}).required();

module.exports = loginSchema;
