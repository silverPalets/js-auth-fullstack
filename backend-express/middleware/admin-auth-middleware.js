function adminAuthMiddleware(req, res, next) {
  const { role } = req.userInfo;

  if (role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "access denied, admin access required",
    });
  }

  next();
}

module.exports = adminAuthMiddleware;
