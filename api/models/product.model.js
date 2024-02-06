const pool = require("../config/database");

module.exports = {
  productById: (code, callBack) => {
    pool.query(
      `SELECT * FROM products WHERE code = ?`,
      [code],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  allProducts: (callBack) => {
    pool.query(`SELECT * FROM products`, [], (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
