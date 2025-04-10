require("dotenv").config();
const express = require("express");
const connectDb = require("./database/db.js");

const app = express();
const PORT = process.env.PORT;

//connecting to database
connectDb();

app.get("/home", (req, res) => {
  res.json({
    message: "testing from home!",
  });
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
