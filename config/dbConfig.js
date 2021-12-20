const mongoose = require('mongoose');

//Database connection
const connectDB = async () => {
  try {
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
      const conn = await mongoose.connect(process.env.LOCALDB_URL);
      console.log(`mongoDB connected: ${conn.connection.host}`);
    } else {
      await mongoose.connect(process.env.MONGODB_URI);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
