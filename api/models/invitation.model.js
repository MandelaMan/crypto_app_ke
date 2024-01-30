const pool = require("../config/database");

module.exports = {
  getInvitationIncomeByUserId: (user_id, callBack) => {
    pool.query(
      `SELECT * FROM invitation_income where user_id = ?`,
      [user_id],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  addInvitationCode: (data, callBack) => {
    pool.query(
      `INSERT INTO invitation_income (user_id, code, reedem_amount) 
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
  updateInvitationCodeRedeemTimes: (code, callBack) => {
    pool.query(
      `UPDATE invitation_income SET redeemed_times = redeemed_times + 1 WHERE code = ?`,
      [code],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
