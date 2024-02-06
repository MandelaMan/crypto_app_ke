const { createPool } = require("mysql");

// https://www.freesqldatabase.com/account/

const pool = createPool({
  port: process.env.DB_PORT,

  host: "sql6.freesqldatabase.com",
  user: "sql6679409",
  password: "mCVqTGThbN",
  database: "sql6679409",

  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "crypto_app",

  connectionLimit: 10,
});

module.exports = pool;
