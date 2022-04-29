// Exercise: Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Change your top choices into objects, e.g. presidents with name, year of presidency, etc as properties.

// For each choice, log to the screen a string like: "My #1 choice is blue."
// Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.

let choiceList = ["apple", "banana", "papaya"];
let choiceSuffix = "";
for (let i = 0; i < choiceList.length; i++) {
    choiceNumber = i + 1;
    switch (choiceNumber) {
        case 1:
            choiceSuffix = "st";
            break;
        case 2:
            choiceSuffix = "nd";
            break;
        case 3:
            choiceSuffix = "rd";
            break;
        default:
            choiceSuffix = "th";
    }
    console.log(`My #${choiceNumber} choice is ${choiceList[i]}.`);
    console.log(
        `My ${choiceNumber}${choiceSuffix} choice is ${choiceList[i]}.`
    );
}
