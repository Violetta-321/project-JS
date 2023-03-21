
let positions = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];

let employees = [];
//  //  //  prompt имена:
// function getNames() {
//     for (let i = 0; i < positions.length; i++) {
//     let name = prompt("Enter new employee name");
//     employees.push(name);
// }
// console.log(employees);
// }
// getNames()
// // //

employees= ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

let selary;
let allselary = [];
let team = {};


function createTeam() {
team = [
    {
        name: employees[0],
        position: positions[0],
        tellAboutYourSelf() {
            console.log(`My name is ${this.name} and I'm the ${this.position} \nMy salary is ${this.selary}$.`);
        },
    },
    {
        name: employees[1],
        position: positions[1],
        tellAboutYourSelf() {
            console.log(`My name is ${this.name} and I'm the ${this.position} \nMy salary is ${this.selary}$.`);
        },
    },
    {
        name: employees[2],
        position: positions[2],
        tellAboutYourSelf() {
            console.log(`My name is ${this.name} and I'm the ${this.position} \nMy salary is ${this.selary}$.`);
        },
    },
    {
        name: employees[3],
        position: positions[3],
        tellAboutYourSelf() {
            console.log(`My name is ${this.name} and I'm the ${this.position} \nMy salary is ${this.selary}$.`);
        },
    },
    {
        name: employees[4],
        position: positions[4],
        tellAboutYourSelf() {
            console.log(`My name is ${this.name} and I'm the ${this.position} \nMy salary is ${this.selary}$.`);
        },
    },
    {
        name: employees[5],
        position: positions[5],
        tellAboutYourSelf() {
            console.log(`My name is ${this.name} and I'm the ${this.position} \nMy salary is ${this.selary}$.`);
        },
    },
    {
        name: employees[6],
        position: positions[6],
        tellAboutYourSelf() {
            console.log(`My name is ${this.name} and I'm the ${this.position} \nMy salary is ${this.selary}$.`);
        },
    },
];
console.log(team);
}
createTeam();


function getSalary() {
    let minSelary = 0;
    let maxSelary = 0;

    for (const person of team) {
        if (person.position.indexOf('Junior') !== -1) {
            minSelary = 500;
            maxSelary = 1000;
        } else if (person.position.indexOf('Middle') !== -1) {
            minSelary = 1500;
            maxSelary = 2000;
        } else if (person.position.indexOf('Senior') !== -1) {
            minSelary = 2500;
            maxSelary = 3000;
        } else {
            minSelary = 4000;
            maxSelary = 4500;
        }
    // console.log(minSelary);
    // console.log(maxSelary);

    function getRandomIntInclusive(min, max) {

        min = Math.ceil(min);
        max = Math.floor(max);
        selary = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
        return selary;
    }
    getRandomIntInclusive(minSelary, maxSelary)
    person.selary = selary;
                        // allselary.push(selary)
    }
                        // console.log(allselary);
}

getSalary();


for (person of team) {
    person.tellAboutYourSelf()
}


 team.showTeam = function () {
    for (const person of team) {
        document.write(`${person.name} - ${person.position}. Selary = ${person.selary} <br/>`);
        document.write('<br/>');
    }
 }
 team.showTeam()



//  getNames();
// createTeam();
// getSalary();
// team.showTeam();