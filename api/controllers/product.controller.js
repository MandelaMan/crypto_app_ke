const { allProducts } = require("../models/product.model.js");
const { createPurchase } = require("../models/purchased_product.model.js");
const { errorHandler } = require("../utils/helperFunctions.js");

module.exports = {
  purchaseProduct: async (req, res, next) => {
    const body = req.body;

    await createPurchase(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          messgae: "Error getting users",
        });
      }

      return res.status(200).json(results === undefined ? [] : results);
    });
  },
  getProducts: async (req, res, next) => {
    await allProducts((err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          messgae: "Error getting products",
        });
      }

      return res.status(200).json(results);
    });
  },
  test: (req, res) => {
    res.json({
      message: "ok",
    });
  },
};
