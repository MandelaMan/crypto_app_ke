const pool = require("../config/database");

module.exports = {
  allTransactions: (callBack) => {
    pool.query(`SELECT * FROM transactions`, [user_id], (error, results) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  allTransactionsByUser: (user_id, callBack) => {
    pool.query(
      `SELECT * FROM transactions where user_id = ?`,
      [user_id],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
