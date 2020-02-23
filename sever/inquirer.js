const inquirer = require("inquirer");
module.exports = {
  userInput: () => {
    const questions = [
      {
        // update the questions
        name: "options",
        type: "list",
        message: "what would you like to do?:",
        choices: ["add employee", "add department", "add role"]
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
  },
  addDepartment: () => {
    const questions = [
      {
        name: "name",
        type: "input",
        message: "Enter the department name :",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter the department name :";
          }
        }
      },
      {
        name: "id",
        type: "input",
        message: "Enter there department id:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there id: :";
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  addRoles: () => {
    const questions = [
      {
        name: "role_id",
        type: "input",
        message: "Enter the role id of the employee:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter the role id of the employee:";
          }
        }
      },
      {
        name: "role_title",
        type: "input",
        message: "Enter the role of the employee:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter the role of the employee:";
          }
        }
      },
      {
        name: "role_salary",
        type: "input",
        message: "Enter there salary:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there salary: :";
          }
        }
      },
      {
        name: "department_id",
        type: "input",
        message: "Enter there department id:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there department id: :";
          }
        }
      }
      
    ];
    return inquirer.prompt(questions);
  },

  
  
};
