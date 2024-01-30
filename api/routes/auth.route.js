const express = require("express");
const {
  signUp,
  signIn,
  signOut,
  generateCode,
} = require("../controllers/auth.controller.js");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);
// router.post("/generate-code", generateCode);

module.exports = router;
