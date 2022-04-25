//---------1---------
// Create a program in JavaScript that prompts for your name and prints a greeting using your name.
//start
//create variable for name
//create variable for greetings
//ask to write name and assign to name var
//print greeting
//end

// function promptMessage() {
//     let firstName = prompt("What is your first name?", "");
//     const greetings = `Hello ${firstName}! Nice to meet you here! Have a good time ;)`;
//     alert(greetings);
// }

//-------2------------
//fortune teller
//crreate variables for name, husband name, living place, job title, number of kids
//assign the values to the variables
//create fortune message which contains all information

// function promptMessage() {
//     let firstName2 = prompt("What is your first name?", "");
//     let partnerName = prompt("What is your husband name?", "");
//     let livePlace = prompt("Where do you want to live?", "");
//     let kidNumber = prompt("How many children do you want to have?", "");
//     let jobTitle = prompt("What do you want to work?", "");
//     const fortune = `You, ${firstName2}, will be a ${jobTitle} in ${livePlace}, and married to ${partnerName} with ${kidNumber} kids.`;
//     alert(fortune);
// }

//--------------3----------------------------
//calculate your age
//start
//create variables for birth years, future years and calculate ages
//assign values
//create output message
//print message
//end

// function promptMessage() {
//     const birthYear = prompt("What is your birth year?", "");
//     let futureYear = prompt("insert future years?", "");
//     let age1 = parseInt(futureYear) - parseInt(birthYear) - 1;
//     let age2 = parseInt(futureYear) - parseInt(birthYear);
//     const age = `I will be either ${age1} or ${age2} in ${futureYear}`;
//     alert(age);
// }

//-----------------4-------------------------------------
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

function promptMessage() {
    let inputString = prompt("Please enter the text", "");
    let count;
    var changedString;
    if (inputString.indexOf(" ")) {
        changedString = inputString.replace(/\s/g, "");
        count = changedString.length;
    } else count = inputString.length;

    let output = `You enter ${inputString} and it contains ${count} characters.`;
    alert(output);
}

//----------------------5---------------------------
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

// function promptMessage() {
//     let quote = prompt("Please insert a quote", "");
//     let author = prompt("Please insert an author", "");
//     const message = `${author} says, "${quote}"`;
//     alert(message);
// }
