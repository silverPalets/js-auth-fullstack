const express = require("express");
const tokenDecoderMiddleware = require("../middleware/auth-token-middleware");

const router = express.Router();

router.get("/welcome", tokenDecoderMiddleware, (req, res) => {
  const userInfo = req.userInfo;
  res.status(200).json({
    success: true,
    message: `welcome ${userInfo.role}, ${userInfo.username}`,
  });
});

module.exports = router;
