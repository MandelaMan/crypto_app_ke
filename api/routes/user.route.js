const express = require("express");
const {
  test,
  getTransactions,
  getUserTransactions,
  getInvitationIncome,
  redeemCode,
  getBalance,
  getUserWithdrawableAmount,
} = require("../controllers/user.controller.js");
const { verifyToken } = require("../utils/helperFunctions.js");

const router = express.Router();

router.get("/test", test);

// Added middleware verifyToken to check whether the token is valid
router.get("/transactions/:id", verifyToken, getUserTransactions);
router.get("/invitation-income/:id", verifyToken, getInvitationIncome);
router.get("/withdrawable-amount/:id", verifyToken, getUserWithdrawableAmount);
router.get("/balance/:id", verifyToken, getBalance);
router.post("/redeem-code/:code", redeemCode);

module.exports = router;
