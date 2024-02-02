const { verify, sign } = require("jsonwebtoken");

module.exports = {
  errorHandler: (statusCode, message) => {
    const error = new Error();

    error.statusCode = statusCode;
    error.message = message;

    return error;
  },
  generateInvitationCode: () => {
    return Math.random().toString(36).slice(-6).toLocaleUpperCase();
  },
  generateToken: (id) => {
    return sign({ id }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });
  },
  verifyToken: (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
      return next(this.errorHandler(403, "Token not provided"));
    }

    verify(token, "4_8y$1hDv76", (err, user) => {
      if (err) {
        next(this.errorHandler(403, err));

        return res.clearCookie("access_token").res.status(200).json({
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
