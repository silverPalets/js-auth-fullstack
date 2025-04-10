const express = require("express");

const routers = express.Router();

routers.post("/register", (req, res) => {
  const value = req.body.value;
  res.json({
    message: "copy that!",
    bodyValue: value,
  });
});

routers.post("/login", (req, res) => {
  res.json({
    message: "copy that!",
  });
});

module.exports = routers;
