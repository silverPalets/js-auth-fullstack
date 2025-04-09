require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.get("/home", (req, res) => {
  res.json({
    message: "testing from home!",
  });
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
