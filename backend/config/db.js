const mongoose = require("mongoose");

const connectDB = async () => {
  if (process.env.MONGO_URI !== undefined) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);

      console.log(`mongoDB connected successfully to: ${conn.connection.host}`);
    } catch (error) {
      console.error(`error: ${error.message}`);
      process.exit(1);
    }
  }
};

module.exports = connectDB;
