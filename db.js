const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'akhilasuhas6',
  database: 'contact_manager'
});

module.exports = db;
