const mysql2 = require('mysql2')

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appform'
}).promise();

module.exports = db