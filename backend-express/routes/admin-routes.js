const express = require("express");
const tokenDecoderMiddleware = require("../middleware/auth-token-middleware");
const adminAuthMiddleware = require("../middleware/admin-auth-middleware");

const router = express.Router();

router.get(
  "/panel",
  tokenDecoderMiddleware,
  adminAuthMiddleware,
  (req, res) => {
    const { username } = req.userInfo;

    res.status(200).json({
      success: true,
      message: `Okaeri, ${username}-sama`,
    });
  }
);

module.exports = router;
