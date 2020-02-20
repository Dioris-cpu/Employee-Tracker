const mySql = require('mysql');
const util = require("util");

const connection = mySql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'yourRootPassword',
    database : 'employees_db'
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;
     
    // connection.connect(function(err) {
    //   if (err) throw err;
    //   console.log("connected as id " + connection.threadId);
    //   afterConnection();
    // });
    
    // function afterConnection() {
    //   connection.query("SELECT * FROM employees_db", function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     connection.end();
    //   });
    // }
    
    