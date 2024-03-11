const mysql = require('mysql2');

const db = mysql.createConnection(
    { 
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee management database.`)
);

module.exports = db;