// Create a program in JavaScript that prompts for your name and prints a greeting using your name.
//start
//create variable for name
//create variable for greetings
//ask to write name and assign to name var
//print greeting
//end

let firstName = "Akvile";
const greetings = `Hello ${firstName}! Nice to meet you here! Have a good time ;)`;
console.log(greetings);

//fortune teller
//crreate variables for name, husband name, living place, job title, number of kids
//assign the values to the variables
//create fortune message which contains all information

let firstName2 = "Akvile";
let partnerName = "Ricardas";
let livePlace = "Zurich";
let kidNumber = 2;
let jobTitle = "developer";
const fortune = `You, ${firstName2}, will be a ${jobTitle} in ${livePlace}, and married to ${partnerName} with ${kidNumber} kids.`;
console.log(fortune);

//calculate your age
//start
//create variables for birth years, future years and calculate ages
//assign values
//create output message
//print message
//end
const birthYear = 1984;
let futureYear = 2026;
let age1 = futureYear - birthYear - 1;
let age2 = futureYear - birthYear;
const age = `I will be either ${age1} or ${age2} in ${futureYear}`;
console.log(age);

//Create a program in JavaScript that prompts for an input
//string and displays output that shows the input string
//and the number of characters the string contains.
//start
//add variable for inputString
//create var for number and output message
//assign values for the variables
//calculate length of string
//print answer
//end

let inputString = "verylongword";
let count = inputString.length;
let output = `You enter "${inputString}" and it contains ${count} characters.`;
console.log(output);

//Create a program that prompts for a quote and an author.
//Display the quotation and author as shown here:
//[Author] says, "[Quote]" (Replace [Author] and [Quote] with the actual values
//start
//create string variable for a quote
//create string variable for an author
//create variable for output message
//assign values to variables
//print output message
//end
let quote = "Nice to live this wonderful life!";
let author = "Akvile";
const message = `${author} says, "${quote}"`;
console.log(message);
