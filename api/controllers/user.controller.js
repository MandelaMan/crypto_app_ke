const {
  getInvitationIncomeByUserId,
  updateInvitationCodeRedeemTimes,
} = require("../models/invitation.model.js");
const {
  allTransactions,
  allTransactionsByUser,
} = require("../models/transaction.model.js");
const { errorHandler } = require("../utils/helperFunctions.js");
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
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
  getUserTransactions: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(403, "You are not authenticated"));
    }

    await allTransactionsByUser(req.params.id, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          messgae: "Error getting transactions",
        });
      }

      return res.status(200).json(results === undefined ? [] : results);
    });
  },
  getUserWithdrawableAmount: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(403, "You are not authenticated"));
    }

    await allTransactionsByUser(req.params.id, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          messgae: "Error getting transactions",
        });
      }

      const getAmount = () => {
        return 5000;
      };

      return res.status(200).json(results === undefined ? 0 : getAmount());
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

      return res.status(200).json(results);
    });
  },
  getBalance: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(403, "You are not authenticated"));
    }

    return res.status(200).json(500);
  },
  test: (req, res) => {
    res.json({
      message: "ok",
    });
  },
};
