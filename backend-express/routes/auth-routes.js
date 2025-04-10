const express = require("express");
const { register, login } = require("../controllers/auth-controller.js");
const routers = express.Router();

routers.post("/register", register);

routers.post("/login", login);

module.exports = routers;
