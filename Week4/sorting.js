// var list = [1, 3, 5];
// //it is hacking a little bit
// var smallest_value = 1000000;
// for (i = 0; i < list.length; i++) {
//     var current_value = list[i];
//     if (current_value < smallest_value) {
//         smallest_value = current_value;
//     }
// }
// console.log(smallest_value);

// for (iter = 0; iter < list.length; iter++) {
//     var smallest_value;
//     var smallest_value_index;
//     for (i = iter; i < list.length; i++) {
//         //console.log(i);
//         var current_value = list[i];
//         if (smallest_value == undefined || current_value < smallest_value) {
//             smallest_value = current_value;
//             smallest_value_index = i;
//         }

//         //swap two elements
//         var temp = list[smallest_value_index];
//         list[smallest_value_index] = list[iter];
//         list[iter] = temp;
//     }
// }
// console.log(list);

// list.sort((a, b) => a - b);
// console.log(list);

var list = [4, 1, 3, 10, 20, 2, 7, 35];

function min_value_list(list) {
    var smallest_value = 1000000;
    for (i = 0; i < list.length; i++) {
        var current_value = list[i];
        if (current_value < smallest_value) {
            smallest_value = current_value;
        }
    }
    return smallest_value;
}

var x = min_value_list(list);
console.log(x);

var x = min_value_list([-2, 5, 9, 10, -5, 85, 7]);
console.log(x);
