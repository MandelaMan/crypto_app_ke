const pool = require("../config/database");

module.exports = {
  users: (callBack) => {
    pool.query(
      `SELECT first_name, last_name, email, gender FROM users`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createInvitationCode: (data, callBack) => {
    pool.query(
      `INSERT INTO invitation_code (user_id, code) 
       values (?, ?)`,
      [data.user_id, data.code],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createAccount: (data, callBack) => {
    pool.query(
      `INSERT INTO users (username, user_code, phone_number, email, password) 
       values (?, ?, ?, ?, ?)`,
      [
        data.username,
        data.user_code,
        data.phone_number,
        data.email,
        data.password,
      ],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  update: (data, callBack) => {
    pool.query(
      `UPDATE users first_name=?, last_name=?, email=?, gender=?, password=? where id=?`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.gender,
        data.password,
        data.id,
      ],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  userByPhone: (phone_number, callBack) => {
    pool.query(
      `SELECT * FROM users where phone_number = ?`,
      [phone_number],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  userByEmail: (email, callBack) => {
    pool.query(
      `SELECT * FROM users where email = ?`,
      [email],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
