const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConfig');

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('Api running...');
});

PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
