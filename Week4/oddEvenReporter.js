// Prompt for a number between 0 and 20.
// Check if the given number is even or odd.
// Report the result to the screen (e.g. "2 is even").

// function promptMessage() {
//     let number = prompt("Please enter the number between 0 and 20");
//     if (parseInt(number) % 2 == 0) {
//         alert(`Number ${number} is even`);
//     } else alert(`Number ${number} is odd`);
// }

// Write a for loop that will iterate from 0 to 20.
// For each iteration, it will check if the current number is even or odd.
// Report the result to the screen (e.g. "2 is even").

// function evenOddNumber() {
//     for (number = 0; number <= 20; number++) {
//         if (parseInt(number) % 2 == 0) {
//             console.log(`Number ${number} is even`);
//         } else console.log(`Number ${number} is odd`);
//     }
// }

// evenOddNumber();

function evenOddNumberWhile() {
    let number = 0;
    while (number <= 20) {
        if (parseInt(number) % 2 == 0) {
            console.log(`Number ${number} is even`);
        } else console.log(`Number ${number} is odd`);
        number++;
    }
}
evenOddNumberWhile();
