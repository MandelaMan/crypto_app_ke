const pool = require("../config/database");

module.exports = {
  createPurchase: (data, callBack) => {
    pool.query(
      `INSERT INTO users (product_id, user_id) 
       values (?, ?)`,
      [data.product_id, data.user_id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  allPurchasedProductsByUser: (user_id, callBack) => {
    pool.query(
      `SELECT * FROM purchased_products WHERE user_id = ?`,
      [user_id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
