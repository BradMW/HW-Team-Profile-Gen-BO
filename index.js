const fs = require('fs');
const inquirer = require('inquirer');
// const generateHTML = require('generate.html');

// const employee = require('./lib/employee.js');
// const engineer = require('./lib/engineer.js');
// const intern = require('./lib/intern.js');
// const manager = require('./lib/manager.js');

const partyPeople = [];

//prompt user to enter team manager name, id, email, office number
function init() {
inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is your managers name?',
                validate: validatorText
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'What is their employee ID?',
                validate: validatorNum
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter manager email.',
                validate: validatorText
            },
            {
                type: 'input',
                name: 'officeNum',
                message: 'Enter managers office number.',
                validate: validatorNum
            }
        ])
        //then push answers onto the array and prompt user with next questions.
        .then((answers) => {
       console.log(answers);
       partyPeople.push(answers);
        menuPrompt();
        });
};

function menuPrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuOption',
                message: 'What would you like to do next?',
                choices: [
                    "Add an Engineer",
                    "Add an Intern",
                    "Finish building my team"
                ]
            }
         
        ])
        //depending on user choice, a diferent function will be called
        .then((selection) => {
            if(selection.menuOption === "Add an Engineer") {
                addEngineer();
            }
            else if(selection.menuOption === "Add an Intern") {
                addIntern();
            }
           else if(selection.menuOption === "Finish building my team") {
                finishTeam();
           }
           else{
                console.log("SOMETHING WENT WRONG!!")
           }
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is your engineers name?',
                validate: validatorText
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'What is their employee ID?',
                validate: validatorNum
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter manager email.',
                validate: validatorText
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: 'Enter engineers GitHub username.',
                validate: validatorText
            }
        ])
        .then((engineer) => {
            console.log(engineer);
            partyPeople.push(engineer);
            menuPrompt()
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is your interns name?',
                validate: validatorText
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'What is their employee ID?',
                validate: validatorNum
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter manager email.',
                validate: validatorText
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Where did your intern graduate?',
                validate: validatorText
            }
        ])
        .then((intern) => {
            console.log(intern);
            partyPeople.push(intern);
            // var newIntern = new intern(intern);
            menuPrompt()
        })
}



// create function for generalized validation for questions that are required for the README
function validatorText(response) {
    // Make sure the response is not a number, and that it exists
	let validation = response && isNaN(response) ? true : 'This response is required but it needs to be text! Try again!'
	return validation;
};

    function validatorNum(response) {
        let validation = response && !isNaN(response) ? true : 'This response is required but it needs to be number! Try again!'
        return validation;
    };


function finishTeam() {
    console.log("We're finished!")
}


// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile(generateHTML(data))
}

// TODO: Create a function to initialize app
function initialize() {
    inquirer.prompt(questions).then(answers => {
        fs.writeFileSync('./dist/team.html', generateHTML(answers));
    })
}

// Function call to initialize app
init();
