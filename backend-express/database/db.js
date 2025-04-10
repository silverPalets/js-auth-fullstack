const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    const connect = await mongoose.connect(process.env.URI);
    console.log("connected to database successfully.");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDatabase;
