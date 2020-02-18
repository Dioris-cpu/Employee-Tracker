const inquirer = require("inquirer");
const cTable = require('console.table');
const mySql = require('mysql');

// use inquirer to prompt the user with the questions
// 'view all employees'
// connect to the database, and run a select statement for all employees, then use console table to print the results back
class Index {
  constructor()
}
  async function run () {
    const { dataChanges } = await inquirer.prompt([
      {
        type: "input",
        name: "dataChanges",
        message: " How many changes do you wish to make to the database ?",
        default: 2
      }
    ])
    for (let i = 0; i < dataChanges.i++;) {
      const answer = await inquirer.prompt([{
        type: "input",
        name: "Employee",
        message:"Please input the employees name that you wish to add"
  
      },
      {
        type: "input",
        name: "Role",
        message:"Please input the role that you wish to add"
  
  
      },
      {
        type: "input",
        name: "Department",
        message:"Please input the department that you wish to add"
  
      }
      
    
    ])
      
    }
  
  
    
  }
  







 
