const User = require("../models/user.model.js");
const { errorHandler } = require("../utils/helperFunctions.js");
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  getTransactions: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(403, "You are not authenticated"));
    }

    res.json({
      message: "ok",
    });
  },
  test: (req, res) => {
    res.json({
      message: "ok",
    });
  },
};
