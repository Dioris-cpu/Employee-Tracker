const mySql = require("mysql");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const connection = require("./connection");


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
  } else if (options === "update employee role") {
    const { employee_id: employee_id, role_id: role_id } = await inquirer.updateEmployeeRole();
    
    console.log(employee_id);
    console.log(role_id);
    
    const sql = `UPDATE employee SET role_id='${role_id}' WHERE id='${employee_id}'`
    connection.query(sql);
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
    const sql3 = `INSERT INTO role (id, title, salary, department_id) VALUES ('${role_id}','${role_title}','${role_salary}','${department_id}')`;
    console.table(sql3); const newRole = await connection.query(sql3);
    const role = await connection.query("SELECT * FROM role");
    console.table(role);
  }
  

 

 
  // const newDepartment = await connection.query(sql2);
  // const department = await connection.query("SELECT * FROM department");
  // console.table(department);
};

run();
