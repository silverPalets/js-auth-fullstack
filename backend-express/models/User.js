const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 20,
      validate: {
        validator: (v) => /^[a-zA-Z0-9_-]+$/.test(v),
        message: (props) => `${props.value} is not a valid username`,
      },
    },
    email: {
      type: String,
      unique: true,
      required: true,
      minLength: 8,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
