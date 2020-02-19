const inquirer = require("inquirer");
module.exports = {
  userInput: () => {
    const questions = [
      {
        name: "Employee",
        type: "input",
        message: "Please Enter the first name or last name :",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Please Enter the first name or last name";
          }
        }
      },
      {
        name: "role",
        type: "input",
        message: "Enter there role:",
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
        type: "input",
        message: "Enter there department:",
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
