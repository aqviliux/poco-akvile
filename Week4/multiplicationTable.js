// Prompt for a number between 0 and 10.
// Multiply the given number by 9.
// Log the result (e.g. "2 * 9 = 18").

function promptMessage() {
    let number = prompt("Please enter the number between 0 and 10");
    let answer = parseInt(number) * 9;
    alert(`${number} multiplicated by 9 is ${answer}`);
}

// Write a for loop that will iterate from 0 to 10.
// For each iteration of the for loop, it will multiply the number by 9.
// Log the result (e.g. "2 * 9 = 18").

// function multiplyNumber() {
//     for (number = 0; number <= 10; number++) {
//         let answer = number * 9;
//         console.log(`${number}  * 9 equal ${answer}`);
//     }
// }

// multiplyNumber();

// function evenOddNumberWhile() {
//     let number = 0;
//     while (number <= 20) {
//         if (parseInt(number) % 2 == 0) {
//             console.log(`Number ${number} is even`);
//         } else console.log(`Number ${number} is odd`);
//         number++;
//     }
// }
// evenOddNumberWhile();
