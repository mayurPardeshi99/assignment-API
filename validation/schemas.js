const Joi = require('joi');

// Input validation schema
const registerUserSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'string.base': "'Name' should be a type of 'text'",
    'string.empty': "'Name' cannot be an empty field",
    'string.min': "'Name' should have at least 2 characters! ",
    'any.required': "'Name' is a required",
  }),
  email: Joi.string().email().required().messages({
    'string.base': "'Email' should be a type of 'email'",
    'string.empty': "'Email' cannot be an empty field",
    'string.email': "'Email' is invalid",
    'any.required': "'Email' is a required",
  }),
  password: Joi.string().min(4).max(20).required().messages({
    'string.base': "'Password' should be a type of 'password'",
    'string.empty': "'Password' cannot be an empty field",
    'string.min': "'Password' should have at least 4 characters! ",
    'string.max': "'Password' should have at most 20 characters! ",
    'any.required': "'Password' is a required",
  }),
});

const logInUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': "'Email' should be a type of 'email'",
    'string.empty': "'Email' cannot be an empty field",
    'string.email': "'Email' is invalid",
    'any.required': "'Email' is a required",
  }),
  password: Joi.string().min(4).max(10).required().messages({
    'string.base': "'Password' should be a type of 'password'",
    'string.empty': "'Password' cannot be an empty field",
    'string.min': "'Password' should have at least 4 characters! ",
    'string.max': "'Password' should have at most 20 characters! ",
    'any.required': "'Password' is a required",
  }),
});

module.exports = { registerUserSchema, logInUserSchema };
