const User = require("../models/User");
const bcrypt = require("bcrypt");

async function register(req, res) {
  try {
    const { username, email, password, role } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "user already exists",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "password is les than 8 characters.",
      });
    }
    const salt = await bcrypt.genSalt();
    console.log(salt);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      success: true,
      message: "user created successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `internal error: ${error.message}`,
    });
  }
}

async function login(req, res) {}

module.exports = { register, login };
