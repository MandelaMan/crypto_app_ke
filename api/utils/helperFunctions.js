const { verify, sign } = require("jsonwebtoken");

module.exports = {
  errorHandler: (success = 0, statusCode, message) => {
    const error = new Error();

    error.success = success;
    error.statusCode = statusCode;
    error.message = message;

    return error;
  },
  generateInvitationCode: () => {
    return Math.random().toString(36).slice(-6).toLocaleUpperCase();
  },
  generateToken: (id) => {
    return sign({ id }, process.env.JWT_KEY, {
      expiresIn: "5h",
    });
  },
  verifyToken: (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
      next(this.errorHandler(403, "Token not provided"));

      return res.clearCookie("access_token").status(500).json({
        success: 0,
        message: "Internal error. Try again later token has expired",
      });
    }

    verify(token, "4_8y$1hDv76", (err, user) => {
      if (err) {
        next(this.errorHandler(403, err));

        return res.clearCookie("access_token").status(403).json({
          message: "User has been logged out",
        });
      }

      req.user = user;

      next();
    });
  },
  verifyAccount: (req, res, next) => {
    const { user_code } = req.body;
  },
};
