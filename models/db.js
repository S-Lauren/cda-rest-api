const mysql = require("mysql2");
const dbConfig = require("../config/db.config.json");

// Create a connection to the database
const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});


module.exports = pool.promise();