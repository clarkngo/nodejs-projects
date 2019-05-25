// npm package dotenv to help read .env file
require('dotenv').config();

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'club_app',
    user     : 'root',
    password : 'password',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM post', function (error, results, fields) {
    if (error)
        throw error;

    console.log(fields);

    results.forEach(result => {
        console.log(result);
        console.log(result.Content);
    });
});

connection.end();
