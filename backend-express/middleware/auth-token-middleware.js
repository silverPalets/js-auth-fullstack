const jwt = require("jsonwebtoken");

function tokenDecoderMiddleware(req, res, next) {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      return res.status(400).json({
        success: false,
        message: `no token provided login first.`,
      });
    }

    const token = bearerToken.split(" ")[1];
    const secretKey = process.env.JWT_SECRET_KEY;
    const userInfo = jwt.verify(token, secretKey);

    req.userInfo = userInfo;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `internal error: ${error.message}`,
    });
  }
}

module.exports = tokenDecoderMiddleware;
