// Access and output Oranges.
// Remove the Banana from the array.
// Sort the array in order.
// Put "Kiwi" at the end of the array.
// Remove "Apples" from the array.
// Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
// You should at the end have ["Kiwi", "Oranges", "Blueberries"]

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(array[2]);
//remove the banana from array
array.shift();
console.log(array);

console.log(array.sort());

array.push("Kiwi");

//remove the apple from array
array.shift();
console.log(array);

// array.sort();
// console.log("sorted " + array);
//sort in reverse order
let sortedArray = [];
for (let i = array.length - 1; i >= 0; i--) {
    sortedArray.push(array[i]);
}
console.log("reversed " + sortedArray);
console.log(sortedArray);
