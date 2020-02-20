const inquirer = require("inquirer");
module.exports = {
  userInput: () => {
    const questions = [
      {
        // update the questions
        name: "Employee",
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
        name: "role id",
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
        name: "department id",
        type: "input",
        message: "Enter there department id:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there department id.";
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
