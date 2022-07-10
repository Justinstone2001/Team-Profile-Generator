const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');

const teamArr = [];

function runner () {
    function manager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of the manager?',
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the id number of the manager?',
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the email of the manager?',
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: 'What is the office number of the manager?',
            },
        ]).then(input => {
            const manager = new Manager(input.managerName, input.managerId, input.managerEmail, input.managerOffice);
            teamArr.push(manager);
            makeTeam();
        });
    }
    function engineer(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the name of the engineer you would like to add?",
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the id of the engineer?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is engineer's github?",
            },
        ]).then(input => {
            const engineer = new Engineer(input.engineerName, input.enginerId, input.engineerEmail, input.engineerGithub);
            teamArr.push(engineer);
            makeTeam();
        });
    }

    function intern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the name of the intern you would like to add?',
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is the id of the intern?',
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the email of the intern you would like to add?',
            },
            {
                type: 'input',
                name: 'internUniversity',
                message: 'What university did the intern attend?',
            },
        ]).then(input => {
            const intern = new Intern(input.internName, input.internId, input.internEmail, input.internUniversity);
            teamArr.push(intern);
            makeTeam();
        })
    }

    function makeTeam() {
        inquirer.prompt([{
            type: "list",
            name: "prompt",
            message: "What kind of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'No More']
        }]).then(function (input) {
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
                    let team = generateHTML(teamArr)
                    fs.writeFile("./output/output.html", team, (err) => 
                    err ? console.log(err) : console.log("Html generated!")
                    );
                    break;
                // default: {
                //     htmlGenerator();
                // }
            }
        })
    }

    manager();
}

runner();