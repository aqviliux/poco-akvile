// find a node
// declare as variable
// manipulate

//easy use and more convinient to use querySelector
let paragraph1 = document.querySelector("p:last-child");
let paragraph = document.querySelector("#changeMe");
let newText = "the text was magically changed.";
paragraph.innerText = newText;
paragraph.textContent = "and gone...";

let list = document.querySelectorAll("li");

// list.forEach( (li, index) => {li.innerText= index + 1;} );

//  list.forEach( (li) => {li.innerText=} )

// for (let i=0; i< list.length; i++) {
//     list[i].innerText= i + 1;
// }

// for (let li of list) {
//     li.innerText = li.innerText.slice(5);
// }

for (let li of list) {
    li.innerText = li.innerText.substring(5, 6);
}
