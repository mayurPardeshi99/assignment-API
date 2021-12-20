const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const {
  notFoundHandler,
  errorHandler,
} = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api running...');
});

app.use('/api/user', userRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
