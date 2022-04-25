// Retirement calculator
// Create a program that determines how many years you have
// left until retirement and the year you can retire.
// It should prompt for your current age and the age you
// want to retire and display the output
// as shown in the example that follows on the next slide.

// List inputs, outputs, processes in a text file.
// What are the constraints? Any edge case to consider? Note in your text file.
// Write the steps of your algorithm in pseudo-code in a second text file.
// Write the program in JavaScript. Find out how to get the current year from your computer.
// Push all 3 files (1 js and 2 txt) to your Github account.

// What is your age? 25
// At what age would you like to retire? 65
// You have 40 years left until you can retire.
// It's 2020, so you can retire in 2060.

/*
inputs:
numbers for current and retirement ages; ask user to prompt it


output:
message which contains the current year and retirement year.

begin
create variables currentAge and retirementAge
create variable and assign for current year
prompt message to ask user to insert current age and assign it to currentAge
prompt message to ask user to insert current age and assign it to retirementAge
check if inserted ages are numbers and contains four numbers
calculate how many years do you need to live until your retirement age : retirementAge - currentAge;
calculate the year of retirement - currentYear + (retirementAge - currentAge)
alert the output message 

end

*/

let age;
let retirementAge;
let pattern = /^[0-9]+$/;

age = prompt("What is your age?");
retirementAge = prompt("At what age would you like to retire?");
const d = new Date();
var currentYear = d.getFullYear();

if (
    pattern.test(age) &&
    (age.length = 2) &&
    pattern.test(retirementAge) &&
    (retirementAge.length = 2) &&
    age < retirementAge
) {
    alert(retirementCalculator(age, retirementAge));
} else {
    alert("you entered incorrect values");
}

function retirementCalculator(age, retAge) {
    let leftYear = parseInt(retAge) - parseInt(age);
    let retYear = parseInt(currentYear) + leftYear;
    return (output = `You have ${leftYear} years left until you can retire. \nIt's ${currentYear}, so you can retire in ${retYear}.`);
}
