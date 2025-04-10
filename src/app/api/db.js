const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'productos',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a MySQL');
});

module.exports = connection;
