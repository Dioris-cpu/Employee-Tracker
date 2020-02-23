const mySql = require("mysql");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const connection = require("./connection");

// const first_name = require('./inquirer')
// const role_id = require('./inquirer')
// const manager_id = require('./inquirer')

// use inquirer to prompt the user with the questions
// 'view all employees'
// connect to the database, and run a select statement for all employees, then use console table to print the results back

clear();

console.log(
  chalk.magentaBright(figlet.textSync("EMPLOYEES", { standardLayout: "full" }))
);

const inquirer = require("./inquirer");

const run = async () => {
  const { options } = await inquirer.userInput();

  if (options === "add employee") {
    const { first_name, last_name, role_id, manager_id } = await inquirer.addEmployee();
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}','${last_name}', '${role_id}', '${manager_id}')`;
  const newEmployee = connection.query(sql);
  console.table(sql);
   const employees = await connection.query("SELECT * FROM employee");
  console.table(employees);
  } else if (options === "add department") {
    // console.table("returned from addDept", await inquirer.addDepartment())
    const { name: department_name, id: department_id }  = await inquirer.addDepartment();
    const sql2 = `INSERT INTO department (name, id) VALUES ('${department_name}','${department_id}')`;
    console.table(sql2); const newDepartment = await connection.query(sql2);
    const department = await connection.query("SELECT * FROM department");
    console.table(department);
  } else if (options === "add role" ) {
    const { role_id, role_title, role_salary, department_id }  = await inquirer.addRoles(); 
    const sql3 = `INSERT INTO role (id, title, salary) VALUES ('${role_id}','${role_title}','${role_salary}','${department_id}')`;
    console.table(sql3); const newRole = await connection.query(sql3);
    const role = await connection.query("SELECT * FROM role");
    console.table(role);
  }
  

 

 
  // const newDepartment = await connection.query(sql2);
  // const department = await connection.query("SELECT * FROM department");
  // console.table(department);
};

run();
