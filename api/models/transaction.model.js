const pool = require("../config/database");

module.exports = {
  createTransaction: (data, callBack) => {
    pool.query(
      `INSERT INTO transactions (user_id, code, reedem_amount) 
       values (?, ?, ?)`,
      [data.user_id, data.code, data.reedem_amount],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  allTransactions: (callBack) => {
    pool.query(`SELECT * FROM transactions`, [user_id], (error, results) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  allTransactionsByUser: (filters, callBack) => {
    const { user_id, type, method, status } = filters;

    const conditions = [`user_id = ?`];

    const dataFilters = [user_id];

    if (type !== null) {
      conditions.push(`type = ?`);
      dataFilters.push(type);
    }

    if (method !== null) {
      conditions.push(`method = ?`);
      dataFilters.push(method);
    }

    if (status !== null) {
      conditions.push(`status = ?`);
      dataFilters.push(status);
    }

    const query = `SELECT * FROM transactions WHERE ${conditions.join(
      " AND "
    )}`;

    pool.query(query, dataFilters, (error, results) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
};
