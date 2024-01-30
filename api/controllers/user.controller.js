const {
  getInvitationIncomeByUserId,
  updateInvitationCodeRedeemTimes,
} = require("../models/invitation.model.js");
const { errorHandler } = require("../utils/helperFunctions.js");
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  getBalances: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(403, "You are not authenticated"));
    }

    res.json({
      message: "ok",
    });
  },
  redeemCode: async (code) => {
    await updateInvitationCodeRedeemTimes(code, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          messgae: "Error getting users",
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getTransactions: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(403, "You are not authenticated"));
    }

    res.json({
      message: "ok",
    });
  },
  getInvitationIncome: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(403, "You are not authenticated"));
    }

    getInvitationIncomeByUserId(req.params.id, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          messgae: "Error getting users",
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getBalance: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(403, "You are not authenticated"));
    }

    const results = {
      balance: 500,
    };

    return res.status(200).json({
      success: 1,
      data: results,
    });
  },
  test: (req, res) => {
    res.json({
      message: "ok",
    });
  },
};
