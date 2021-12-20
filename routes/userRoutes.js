const express = require('express');
const Router = express.Router();
const { registerUser, authUser } = require('../controllers/userController');

Router.post('/register', registerUser);
Router.post('/login', authUser);

module.exports = Router;
