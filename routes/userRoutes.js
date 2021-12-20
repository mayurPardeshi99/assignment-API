const express = require('express');
const Router = express.Router();
const {
  registerUser,
  authUser,
  getUserProfile,
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');
const {
  userLogInValidate,
  userRegisterValidate,
} = require('../validation/userValidation');

Router.post('/register', userRegisterValidate, registerUser);
Router.post('/login', userLogInValidate, authUser);
Router.get('/profile', protect, getUserProfile);

module.exports = Router;
