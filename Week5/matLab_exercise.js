//  Do your Mad Lib exercise again:
// Create a simple mad-lib program
// that prompts for a noun, a verb, an adverb, and an adjective and injects
// those into a story that you create.

// Write a function and store the variables in an array - or better an object?

// let storyArray = [];

// storyArray[0] = prompt("please insert a noun");
// storyArray[1] = prompt("please insert a verb");
// storyArray[2] = prompt("please insert an adverb");
// storyArray[3] = prompt("please insert an adjective");

// alert(
//     `Lets read a story:  ${storyArray[3]}  ${storyArray[0]} ${storyArray[1]} ${storyArray[2]} `
// );

const stObject = {
    noun: "dog",
    verb: "run",
    adverb: "faster",
    adjective: "red",
};

stObject.noun = prompt("please insert a noun");
stObject.verb = prompt("please insert a verb");
stObject.adverb = prompt("please insert an adverb");
stObject.adjective = prompt("please insert an adjective");
alert(
    `Lets read a story:  ${storyObject.adjective}  ${storyObject.noun} ${storyObject.verb} ${storyObject.adverb} `
);
