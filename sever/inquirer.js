const inquirer = require("inquirer");
module.exports = {
  userInput: () => {

    const questions = [
      {
        // update the questions
        name: "options",
        type: "list",
        message: "what would you like to do?:",
        choices: ["add employee", "c2", "c3"],
        
      }
    ];
    return inquirer.prompt(questions);
  },
  addEmployee: () => {

    const questions = [
      {
        // update the questions
        name: "first_name",
        type: "input",
        message: "Enter the first name of the employee that you wish to add:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter the first name of the employee that you wish to add";
          }
        } 
      },
      {
        name: "last_name",
        type: "input",
        message: "Enter there last name:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there last name.";
          }
        }
      },
      {
        name: "role_id",
        type: "input",
        message: "Enter there role id:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there role id.";
          }
        }
      },
      {
        name: "manager_id",
        type: "input",
        message: "Enter there manager id:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there manager id.";
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
