const express = require("express");
const {
  test,
  getTransactions,
  getInvitationIncome,
  redeemCode,
} = require("../controllers/user.controller.js");
const { verifyToken } = require("../utils/helperFunctions.js");

const router = express.Router();

router.get("/test", test);

// Added middleware verifyToken to check whether the token is valid
router.get("/transactions/:id", verifyToken, getTransactions);
router.get("/invitation-income/:id", verifyToken, getInvitationIncome);
router.post("/redeem-code/:code", redeemCode);

module.exports = router;
