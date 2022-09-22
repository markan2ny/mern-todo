const mongoose = require("mongoose");

module.exports = connectionDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(`Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
