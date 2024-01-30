const express = require("express");
const {
  test,
  getTransactions,
  getInvitationIncome,
  redeemCode,
  getBalance,
} = require("../controllers/user.controller.js");
const { verifyToken } = require("../utils/helperFunctions.js");

const router = express.Router();

router.get("/test", test);

// Added middleware verifyToken to check whether the token is valid
router.get("/transactions/:id", verifyToken, getTransactions);
router.get("/invitation-income/:id", verifyToken, getInvitationIncome);
router.get("/balance/:id", verifyToken, getBalance);
router.post("/redeem-code/:code", redeemCode);

module.exports = router;
