const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub;

    }
      
        getRole() {
            console.log(Engineer);
            return "Engineer"
        }
        getGithub() {
            console.log(this.gitHub);
        }
}

module.exports = Engineer;