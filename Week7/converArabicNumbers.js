// Convert arabic numbers to Roman
// Write a function to convert from arabic
//  (normal) numbers to Roman Numerals.
//  The Romans wrote numbers using letters: I, V, X, L, C, D, M.
//  There is no need to be able to convert numbers larger than about 3000.

// Example: 7 returns VII

// 1	I
// 4	IV
// 5	V
// 9	IX
// 10	X
// 40	XL
// 50	L
// 90	XC
// 100	C
// 400	CD
// 500	D
// 900	CM
// 1000	M

function getPartNumber(n) {
    let letter;
    switch (n) {
        case 1:
            letter = "I";
            break;
        case 4:
            letter = "IV";
            break;
        case 5:
            letter = "V";
            break;
        case 9:
            letter = "IX";
            break;
        case 10:
            letter = "X";
            break;
        case 40:
            letter = "XL";
            break;
        case 50:
            letter = "L";
            break;
        case 90:
            letter = "XC";
            break;
        case 100:
            letter = "C";
            break;
        case 400:
            letter = "CD";
            break;
        case 500:
            letter = "D";
            break;
        case 900:
            letter = "CM";
            break;
        case 1000:
            letter = "M";
            break;
        default:
            console.log("wrong number");
    }
    return letter;
}

let number = 1000;
let decimalNumb = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function convertNumber(number) {
    let romanNumber = "";
    if (number > 3001 || number < 0) {
        console.log("too big or too small number");
        return number;
    }
    for (let i = 0; i < decimalNumb.length; i++) {
        while (number >= decimalNumb[i]) {
            number = number - decimalNumb[i];
            romanNumber = romanNumber + getPartNumber(decimalNumb[i]);
            // console.log(romanNumber);
        }
    }
    return romanNumber;
}

console.log(convertNumber(number));
