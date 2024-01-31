const {
  getInvitationIncomeByUserId,
  updateInvitationCodeRedeemTimes,
} = require("../models/invitation.model.js");
const { allProducts } = require("../models/product.model.js");
const { errorHandler } = require("../utils/helperFunctions.js");
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  getProducts: async (req, res, next) => {
    await allProducts((err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          messgae: "Error getting users",
        });
      }

      return res.status(200).json(results === undefined ? [] : results);
    });
  },
  test: (req, res) => {
    res.json({
      message: "ok",
    });
  },
};
