const express = require("express");
const { verifyToken } = require("../utils/helperFunctions.js");
const {
  getProducts,
  purchaseProduct,
} = require("../controllers/product.controller.js");

const router = express.Router();

router.get("/all", getProducts);
router.get("/purchase", purchaseProduct);

// Added middleware verifyToken to check whether the token is valid
module.exports = router;
