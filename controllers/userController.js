const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

// @desc      Register a new user
// @routes    POST /api/user/register
// @access    Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('User already exist');
  }
  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      message: 'Registered successfully.',
      user: {
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(400);
    throw new Error('User not found');
  }
});

// @desc      Authenticate user & create token
// @routes    POST /api/user/login
// @access    Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      message: 'Logged in successfully.',
      user: {
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(401);
    throw new Error('Invalid email of password');
  }
});

// @desc      Get user profile
// @routes    GET /api/user/profile
// @access    Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

module.exports = { registerUser, authUser, getUserProfile };
