const express = require("express");
const { verifyToken } = require("../utils/helperFunctions.js");
const { getProducts } = require("../controllers/product.controller.js");

const router = express.Router();

router.get("/all", getProducts);

// Added middleware verifyToken to check whether the token is valid
module.exports = router;
