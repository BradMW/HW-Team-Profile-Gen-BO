const fs = require('fs');
const inquirer = require('inquirer');
// const generateHTML = require('generate.html');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern.js');
// const Manager = require('./lib/manager.js');
const Manager = require('./lib/manager.js');

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
                name: 'managerID',
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
      
       const {managerName, managerID, managerEmail, officeNum} = answers;
       const manager = new Manager(managerName, managerID, managerEmail, officeNum);
       partyPeople.push(manager);
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
                name: 'engineerID',
                message: 'What is their employee ID?',
                validate: validatorNum
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter engineers email.',
                validate: validatorText
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: 'Enter engineers GitHub username.',
                validate: validatorText
            }
        ])
        .then((answers) => {
            console.log(answers);
            const {engineerName, engineerID, engineerEmail, engineerGitHub} = answers;
            const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGitHub);
            partyPeople.push(engineer);
            console.log(engineer);
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
                name: 'internID',
                message: 'What is their employee ID?',
                validate: validatorNum
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter intern email.',
                validate: validatorText
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Where did your intern graduate?',
                validate: validatorText
            }
        ])
        .then((answers) => {
            console.log(answers);

            const {internName, internID, internEmail, internSchool} = answers;
            const intern = new Intern(internName, internID, internEmail, internSchool);

            partyPeople.push(intern);
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


let htmlArray = [];
let name, id, email, extra, extraName, icon;

function finishTeam() {
    console.log("We're finished!")
    for(let people of partyPeople) {
      let role =  people.getRole();
      if(role === "Manager") {
         name = people.getName();
         id = people.getId();
         email = people.getEmail();
         extraName = "Office";
         extra = people.getOfficeNum()
         icon = `<i class="fas fa-mug-hot"></i>`;
      }else if(role === "Intern") {
         name = people.getName();
         id = people.getId();
         email = people.getEmail();
         extraName = "School";
         extra = people.getSchool();
         icon = `<i class="fas fa-user-graduate"></i>`;
      }else if("Engineer"){
         name = people.getName();
         id = people.getId();
         email = people.getEmail();
         extraName = "GitHub";
         extra = people.getGithub();
         icon = `<i class="fas fa-atom"></i>`;
      }
      let obj = {
          name: name,
          id: id,
          email: email,
          extraName: extraName,
          extra: extra,
          role: role,
          icon: icon
      }
      htmlArray.push(obj);
    }
    generateHTML(htmlArray);
}


const generateHTML = (htmlArray) => {
    let htmlString = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Title</title>
    </head>
    <body>
    
    <div id="teamCard" class="container d-flex flex-wrap justify-content-center align-items-center">
      
    
    
    `;
    let extraStuff;
    for (let employee of htmlArray) {
        if(employee.extraName === "GitHub") {
            extraStuff = `<a href="https://github.com/${employee.extra}">${employee.extra}</a>`
        } else{
            extraStuff = employee.extra;
        }
        htmlString = htmlString.concat(
            `
            <div class="card" style="width: 18rem;">
            <div class="card-body" style="background-color: darkblue;">
              <h5 class="card-title">${employee.name}</h5>
              <h5 class="card-title">${employee.icon}${employee.role}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${employee.id}</li>
              <li class="list-group-item">${employee.email}</li>
              <li class="list-group-item">${employee.extraName}: ${extraStuff}</li>
            </ul>
          </div>
            `
        )
    }
    htmlString = htmlString.concat(
        `
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
        </body>
        </html>
        `
    )
        writeHtml(htmlString);
        }

        function writeHtml(data) {
            fs.writeFile("index.html", `${data}`, (err) => {
                err ? console.log(err) : console.log("It Works!")
            })
}

init();
