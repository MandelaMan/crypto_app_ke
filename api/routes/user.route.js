const express = require("express");
const { test, getTransactions } = require("../controllers/user.controller.js");
const { verifyToken } = require("../utils/helperFunctions.js");

const router = express.Router();

router.get("/test", test);

// Added middleware verifyToken to check whether the token is valid
router.get("/transactions/:id", verifyToken, getTransactions);

module.exports = router;
