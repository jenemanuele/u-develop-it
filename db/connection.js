const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    //Your MySQL username,
    user: 'root',
    //Your mysql password
    password: 'simone',
    database: 'election'
});

module.exports = db;