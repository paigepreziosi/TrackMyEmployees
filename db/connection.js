const mysql = require('mysql2');

const db = mysql.createConnection(
    { 
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'employee_tracker_db'
    },
    console.log(`Connected to the database.`)
);

module.exports = db;