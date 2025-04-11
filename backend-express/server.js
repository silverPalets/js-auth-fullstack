require("dotenv").config();
const express = require("express");
const connectDb = require("./database/db.js");
const authRouters = require("./routes/auth-routes.js");
const userRouters = require("./routes/user-routes.js");
const adminRouters = require("./routes/admin-routes.js");

const app = express();
const PORT = process.env.PORT;

//connecting to database
connectDb();

app.use(express.json());

//routes middleware
app.use("/api/auth/", authRouters);
app.use("/api/user", userRouters);
app.use("/api/admin", adminRouters);

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
