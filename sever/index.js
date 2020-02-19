const mySql = require('mysql');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

// use inquirer to prompt the user with the questions
// 'view all employees'
// connect to the database, and run a select statement for all employees, then use console table to print the results back

clear();

console.log(
  chalk.red(
    figlet.textSync('TRACKER', { horizontalLayout: 'full' })
  )
);

const inquirer  = require('./inquirer');

const run = async () => {
  const dataChange = await inquirer.userInput();
  console.log(dataChange);
};

run();








 
