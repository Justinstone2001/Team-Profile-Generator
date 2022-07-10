const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, university) {
        super(name, id, email);
        this.university = university;
    }
    getRole() {
        return "Intern";
    }
    getGitHub(){
        return this.university;
    }
}

module.exports = Intern;