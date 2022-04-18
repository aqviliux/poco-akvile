let cards;

function init() {
    cards = createArray();
    printStatus();
    updateCardsUI();
}

function showHide(event, cardNo) {
    // event.target.innerHTML = cards[cardNo];
    pick(cardNo);
}

//create initial array
function createArray() {
    var result = [];
    for (let i = 0; i < 6; i++) {
        result.push(i + 1);
        result.push(i + 1);
    }
    return result;
}

var selectedCards = [];
var revealedCars = [];
// add value of opened two cards;
var openCards = [];

//choose the card
function pick(cardNo) {
    let r = cards[cardNo];

    //add selected card array cell number to selectedcards array
    selectedCards.push(cardNo);
    printStatus();
    //update all cards onsite
    updateCardsUI();
    //add second selected cardno and do comparision
    if (selectedCards.length > 1) {
        checkEqual();
    }

    printStatus();
}

function updateCardsUI() {
    var x = document.getElementById("gridDIV").querySelectorAll(".memoryimg");
    for (i = 0; i < x.length; i++) {
        var myimg = x[i].querySelector("img");
        const list = myimg.classList;
        list.remove("selected");
        list.remove("found");
        list.remove("closed");
        switch (resolveCardStatus(i)) {
            case "selected":
                list.add("selected");
                break;
            case "found":
                list.add("found");
                break;
            case "closed":
                list.add("closed");
                break;
        }
    }
}

function resolveCardStatus(index) {
    if (selectedCards.indexOf(index) > -1) {
        return "selected";
    }
    if (openCards.indexOf(cards[index]) > -1) {
        return "found";
    }
    return "closed";
}

function printStatus() {
    const output = cards.map(function (card, index) {
        return resolveCardStatus(index);
    });
    // console.log(output);
}

function checkEqual() {
    let fs = selectedCards[0];
    let ss = selectedCards[1];
    if (cards[fs] === cards[ss]) {
        selectedCards = [];
        openCards.push(cards[fs]);
    } else {
        selectedCards = [];
    }
}
