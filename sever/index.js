const mySql = require('mysql');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const connection = require('./connection');
// const first_name = require('./inquirer')
// const role_id = require('./inquirer')
// const manager_id = require('./inquirer')

// use inquirer to prompt the user with the questions
// 'view all employees'
// connect to the database, and run a select statement for all employees, then use console table to print the results back

clear();

console.log(
  chalk.magentaBright(
    figlet.textSync('EMPLOYEES', { standardLayout: 'full' })
  )
);

const inquirer  = require('./inquirer');

const run = async () => {
  const dataChange = await inquirer.userInput();
  const dataChange2 = await inquirer.addEmployee();

  const {
    options
  } = dataChange;
  if(options === "add employee"){
    dataChange2
  } else if(options === "c2"){
    console.log("send to a function to handle c2")
  }
  const {
    first_name,
    last_name,
    role_id,
    manager_id,
    
    } = dataChange2
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}','${last_name}', '${role_id}', '${manager_id}')`;
  console.log(sql)
  const newEmployee = connection.query(sql);
  const employees = await connection.query("SELECT * FROM employee");
  console.log(employees);
};

run();









 
