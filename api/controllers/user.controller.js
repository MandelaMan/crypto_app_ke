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
  getUserPurchasedProducts: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      next(errorHandler(403, "You are not authenticated"));
      return res.status(403).json({
        success: 0,
        message: "Error occured",
      });
    }

    await allPurchasedProductsByUser(filters, (err, results) => {
      if (err) {
        return res.status(200).json({
          success: 0,
          message: "Error getting transactions",
        });
      }

      return res.status(200).json(results);
    });
  },
  getUserTransactions: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      next(errorHandler(403, "You are not authenticated"));
      return res.status(403).json({
        success: 0,
        message: "Error occured",
      });
    }

    let filters = {
      user_id: req.params.id,
      type: req.query.type || null,
      method: req.query.method || null,
      status: req.query.status || null,
    };

    await allTransactionsByUser(filters, (err, results) => {
      if (err) {
        return res.status(200).json({
          success: 0,
          message: "Error getting transactions",
        });
      }

      return res.status(200).json(results);
    });
  },
  getWithdrawals: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      next(errorHandler(403, "You are not authenticated"));

      return res.status(500).json({
        success: 0,
        messgae: "Not authorized",
      });
    }

    const inputs = {
      user_id: req.user.id,
      transaction_type: "Withdrawal",
    };

    await allTransactionsByUser(inputs, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          messgae: "Error getting transactions",
        });
      }

      return res.status(200).json(results);
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

      return res.status(200).json(results);
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
