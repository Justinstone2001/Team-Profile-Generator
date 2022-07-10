
const fs = require('fs');
const inquirer = require('inquirer');
const renderHTML = require("./utils/generateHTML");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");

const teamArr = [];

function runner() {
    function manager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name1',
                message: 'What is the name of the manager?',
            },
            {
                type: 'input',
                name: 'id1',
                message: 'What is the id number of the manager?',
            },
            {
                type: 'input',
                name: 'email1',
                message: 'What is the email of the manager?',
            },
            {
                type: 'input',
                name: 'officeNumber1',
                message: 'What is the office number of the manager?',
            },
        ]).then(input => {
            const manager = new Manager(input.name1, input.id1, input.email1, input.officeNumber1);
            teamArr.push(manager);
            myTeam();
        });   
    }

    function myTeam() {
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
                    engineer1();
                    break;
                case "Intern":
                    intern2();
                    break;
                case "No More":
                    let team = renderHTML(teamArr)
                    fs.writeFile("./output/output.html", team, (err) => 
                    err ? console.log(err) : console.log("Created succesfully")
                    );
                    break;
                // default: {
                //     htmlGenerator();
                // }
            }
        })
    }
    function engineer1() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name2',
                message: 'What is the name of the engineer?',
            },
            {
                type: 'input',
                name: 'id2',
                message: 'What is the id number of the engineer?',
            },
            {
                type: 'input',
                name: 'email2',
                message: 'What is the email of the engineer?',
            },
            {
                type: 'input',
                name: 'gitHub2',
                message: 'What is the gitHub username of the engineer?',
            },
        ]).then(input => {
            const engineer = new Engineer(input.name2, input.id2, input.email2, input.gitHub2);
            teamArr.push(engineer);
            myTeam();
        });
    }

    function intern2() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name3',
                message: 'What is the name of the intern?',
            },
            {
                type: 'input',
                name: 'id3',
                message: 'What is the id number of the intern?',
            },
            {
                type: 'input',
                name: 'email3',
                message: 'What is the email of the intern?',
            },
            {
                type: 'input',
                name: 'school3',
                message: 'What school did the intern go to?',
            },
        ]).then(input => {
            const intern = new Intern(input.name3, input.id3, input.email3, input.school3);
            teamArr.push(intern);
            myTeam();
        })
    }

    manager();

}

runner();

