// Set up my requires
const fs = require("fs");
const inquirer = require("inquirer");
const renderHTML = require("./utils/generateHTML");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Employee = require("./lib/employee");

// Set up to push user input to this array
const teamArr = [];

function runner() {
    // Runs the input right at the start prompting the user for questions
    // about the manager's information  
  function manager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the name of the manager?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the id number of the manager?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email address?",
        },
        {
          type: "input",
          name: "managerOffice",
          message: "What is the manager's office number?",
        },
      ])
      //then, pushes each response up to the makeTeam array
      .then((input) => {
        const manager2 = new Manager(
          input.managerName,
          input.manaerId,
          input.managerEmail,
          input.managerOffice
        );
        teamArr.push(manager2);
        makeTeam();
      });
  }
  // Function to hold the information for the rest of the team now
  function makeTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "prompt",
          message: "What team member role would you like to add next?",
          choices: ["Engineer", "Intern", "Done adding employees"],
        },
      ])
      // After putting in manager's information, prompts for two different employees
      // or to stop adding employees
      .then(function (input) {
        switch (input.prompt) {
          case "Manager":
            manager();
            break;
          case "Engineer":
            engineer();
            break;
          case "Intern":
            intern();
            break;
          case "Done adding employees":
            let team = renderHTML(teamArr);
            fs.writeFile("./output/output.html", team, (err) =>
              err ? console.log(err) : console.log("HTML generated succesfully")
            );
            break;
        }
      });
  }
  // Saves user input if they add an engineer
  function engineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the name of the engineer you would like to add?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the id number of the engineer?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineers github repository link?",
        },
      ])
      .then((input) => {
        const engineer2 = new Engineer(
          input.engineerName,
          input.engineerId,
          input.engineerEmail,
          input.engineerGithub
        );
        teamArr.push(engineer2);
        makeTeam();
      });
  }
  // Saves and pushes user input if they add an intern 
  function intern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the name of the intern you would like to add?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is intern's id number?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is intern's email",
        },
        {
          type: "input",
          name: "internUniversity",
          message: "What university did the intern attend?",
        },
      ])
      .then((input) => {
        const intern2 = new Intern(
          input.name3,
          input.id3,
          input.email3,
          input.school3
        );
        teamArr.push(intern2);
        makeTeam();
      });
  }

  manager();
}

runner();
