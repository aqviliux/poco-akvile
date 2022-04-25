// For each single day of the week log the translated output
// e.g. if it is Monday, log "Montag" and so on
// Choose any language you like
// Try different ways: is it possible with if or switch?

let weekday = "Wednesday";

switch (weekday) {
    case "Monday":
        console.log(`${weekday} translates as Pirmadienis`);
        break;
    case "Tuesday":
        console.log(`${weekday}  translates as Antradienis`);
        break;
    case "Wednesday":
        console.log(`${weekday}  translates as Treciadienis`);
        break;
    case "Thursday":
        console.log(`${weekday}  translates as Ketvirtadienis`);
    case "Friday":
        console.log(`${weekday}  translates as Penktadienis`);
        break;
    case "Saturday":
        console.log(`${weekday}  translates as Sestadienis`);
        break;
    case "Sunday":
        console.log(`${weekday}  translates as Sekmadienis`);
        break;
    default:
        console.log(`${weekday} It is not a day!`);
}

// const d = new Date("April 24, 2022");
// let day = d.getDay();

// switch (day) {
//     case 1:
//         console.log("Pirmadienis");
//         break;
//     case 2:
//         console.log("Antradienis");
//         break;
//     case 3:
//         console.log("Treciadienis");
//         break;
//     case 4:
//         console.log("Ketvirtadienis");
//         break;
//     case 5:
//         console.log("Penktadienis");
//         break;
//     case 6:
//         console.log("Sestadienis");
//         break;
//     case 0:
//         console.log("Sekmadienis");
//         break;
//     default:
//         console.log("It is not a day!");
// }
