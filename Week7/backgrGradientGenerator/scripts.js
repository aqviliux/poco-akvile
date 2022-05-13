// Create a background gradient generator
// Create a simple HTML file with the tags needed (see PDF of final generator)
// Add the basic CSS file style.css and edit it to add a default gradient in the background
// Add a JavaScript file
// For each color of the gradient change the background gradient style with the new colors
// Additionally output the gradient style to the HTML (see PDF of final generator)

// Write code so that the colour inputs match the background generated on the first page load.
// Display the initial CSS linear gradient property on page load.
// Add a random button which generates two random numbers for the colour inputs.

var colors;
colors = document.querySelectorAll('[type="color"]');

// //add eventlistener for color input
const listItems = document.querySelectorAll('[type="color"]');
const p = document.createElement("p");
const h = document.querySelector("h3");
h.appendChild(p);
const string = `linear-gradient(to right, ${colors[0].value}, ${colors[1].value})`;
p.innerText = string;

for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("change", changeColor);
}

function changeColor(e) {
    let gradient = document.querySelector("body");
    //background-image: linear-gradient(to right, red, yellow);
    let string = `linear-gradient(to right, ${colors[0].value}, ${colors[1].value})`;
    gradient.style.backgroundImage = string;
    //console.log(string);
    p.innerText = string;
}

const button = document.querySelector("button");
button.addEventListener("click", changeColorRandom);

//declare function to randomize numbers for color inputs
// -> give rgb values as input values, not hex
// -> randomize 3 numbers per input value: r is between 0 and 255, g 0-255, b 0-255 - Math.random()
// function printColor(ev) {
//     const color = ev.target.value
//     const r = parseInt(color.substr(1,2), 16)
//     const g = parseInt(color.substr(3,2), 16)
//     const b = parseInt(color.substr(5,2), 16)
//     console.log(`red: ${r}, green: ${g}, blue: ${b}`)
// //
// function componentToHex(c) {
//     var hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
//   }

//   function rgbToHex(r, g, b) {
//     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
//   }

//   alert(rgbToHex(0, 51, 255)); // #0033ff

// }

function changeColorRandom() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    let hexColor;
    hexColor = "#" + ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
    console.log(hexColor);
}
