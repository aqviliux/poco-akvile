// --------------3----------------------------
// calculate your age
// start
// create variables for birth years, future years and calculate ages
// assign values
// create output message
// print message
// end

// First add an input for the month
// Then change that to using a function
// Call that function several times

function addMonth() {
    let month = prompt("What is your birth month?", "");
    const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    month = month[0].toUpperCase() + month.slice(1);

    if (monthList.includes(month)) {
        alert(month);
    } else {
        let number = parseInt(month) - 1;
        let name = monthList[number];
        alert(name);
    }
}

addMonth();

// function promptMessage() {
//     const birthYear = prompt("What is your birth year?", "");
//     let futureYear = prompt("insert future years", "");
//     let age1 = parseInt(futureYear) - parseInt(birthYear) - 1;
//     let age2 = parseInt(futureYear) - parseInt(birthYear);
//     const age = `I will be either ${age1} or ${age2} in ${futureYear}`;
//     alert(age);
// }

// month = month.toLowerCase().replace(/\b[a-z]/g, function (letter) {
//     return letter.toUpperCase();
// });
