const inquirer = require("inquirer");
module.exports = {
  userInput: () => {
    const questions = [
      {
        name: "Employee",
        type: "input",
        message: "Enter the name of the employee that you wish to add:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter the name of the employee that you wish to add";
          }
        }
      },
      {
        name: "role",
        type: "list",
        message: "Enter there role:",
        choices: ["Manager", "Engineer", "Intern"],
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there role.";
          }
        }
      },
      {
        name: "department",
        type: "list",
        message: "Enter there department:",
        choices: ["Marketing","Research and Development", "HR","Production"],
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there department.";
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
