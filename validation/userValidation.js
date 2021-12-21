const { registerUserSchema, logInUserSchema } = require('./schemas');

// Registration JSON validation
const userRegisterValidate = (req, res, next) => {
  const { error } = registerUserSchema.validate(req.body);
  if (error) {
    const msg = error.details[0].message;
    res.status(400);
    throw new Error(msg);
  } else {
    next();
  }
};

// Log in JSON validation
const userLogInValidate = (req, res, next) => {
  const { error } = logInUserSchema.validate(req.body);
  if (error) {
    const msg = error.details[0].message;
    res.status(400);
    throw new Error(msg);
  } else {
    next();
  }
};

module.exports = { userRegisterValidate, userLogInValidate };
