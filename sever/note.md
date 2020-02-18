


// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'yourRootPassword',
//   database : 'employees_db'
// });
 
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

inquirer
  .prompt([{

    type: "list",
    name: "Options",
    message: "What would you like to do ?",
    choices: [ 
      "View all employees ?",
      "View all departments ?",
      "View all roles ?",
      "Input employee ?",
      "Input department ?",
      "Input roles ?",
      "Delete employee ?",
      "Delete employee ?", 
    ]
  }   
  ])