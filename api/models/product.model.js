const pool = require("../config/database");

module.exports = {
  allProducts: (callBack) => {
    pool.query(`SELECT * FROM products`, [], (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
