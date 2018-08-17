// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
let students = [];
let student = {};

const randomScore = () => {
    let min = Math.ceil(1);
    let max = Math.floor(100);
    return Math.floor(Math.random() * (max - min)) + 1;
};
for (let index = 1; index <= 100; index = index + 1) {
    let nameVal = 'name' + index;
    let grammerScore = randomScore();
    if(index <= 50) {
        let accountsScore = randomScore();
        student = {
            name: nameVal,
            grammer: grammerScore,
            accounts: accountsScore
        };
    }
    if(index > 50) {
        let physicsScore = randomScore();
        student = {
            name: nameVal,
            grammer: grammerScore,
            physics: physicsScore
        };
    }
    students.push(student);
}
const displayReportCard = (aStudents) => {
    let reportCard = [];
    let stName = '';
    aStudents.forEach(obj => {
        stName = obj.name;
        let perc = 0;
        let totalMarks = obj.grammer;
        if(!isNaN(obj.accounts)) {
            totalMarks = totalMarks + obj.accounts;
        }
        if(!isNaN(obj.physics)) {
            totalMarks = totalMarks + obj.physics;
        }
        perc = (totalMarks / 200 * 100).toFixed(2);
        let card = {
            name: stName,
            percentage: perc
        };
        reportCard.push(card);
    });
    return reportCard;
};
// const output = displayReportCard(students);
// console.log(output);
module.exports = displayReportCard;
