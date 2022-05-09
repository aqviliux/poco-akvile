//array of integer [1,3,8,7,6,7]

// let array = [1, 3, 8, 7, 6, 8, 2];

// function findDublicateInt(array) {
//     let dublInt;
//     let sortedArray = array.sort();
//     for (i = 0; i < array.length; i++) {
//         if (array[i] === sortedArray[i + 1]) {
//             dublInt = array[i];
//             return dublInt;
//         }
//     }
//     return 0;
// }

// console.log(findDublicateInt(array));

// sentence - The weather is nice
//output - nice is weather The

sentence = "The weather is nice";

function reverseSentence(string) {
    let newArray = string.split(" ");
    console.log(newArray);
    let reversedArray = [];
    for (i = newArray.length - 1; i > -1; i--) {
        reversedArray.push(newArray[i]);
    }
    let returnString = reversedArray.join(" ");
    return returnString;
}

console.log(reverseSentence(sentence));
