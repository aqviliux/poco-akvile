// Create a tip calulactor in JavaScript. Take the pseudocode
// we created last week and turn it into JS. Step by step. Where to use functions?

// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
//  The program must compute the tip and then display both the tip and the total amount of the bill.
//bill amount = input
// tip rate = input
// tip = output
// total amount = output
// Enter the tip as a percentage. The input should be 15 for "15%", not 0.15.
// Both inputs have to be bigger than 0 and, of course, a number.
// Round fractions of a Rappen up to the next Rappen. Remember 5 Rappen is the smallest.
// TipCalculator
//     Initialize billAmount to 0
//     Initialize tip to 0
//     Initialize tipRate to 0
//     Initialize total to 0

//     Prompt for billAmount with "What is the bill amount?"
//     Prompt for tipRate with "What is the tip rate?"

//     convert billAmount to a number
//     convert tipRate to a number

//     tip = billAmount * (tipRate / 100)
//     round tip up to nearest 5 rappen
//     total = billAmount + tip

//     Display "Tip : CHF" + tip
//     Display "Total : CHF" + total
// End

function tips() {
    let billAmountS = prompt("Please enter bill amount", "");
    let tipRateS = prompt("Please enter tip rate", "");

    let billAmount = parseFloat(billAmountS);
    let tipRate = parseInt(tipRateS);

    let tip = calcTips(billAmount, tipRate);
    total = billAmount + tip;

    let output = `Your tip: CHF${tip} and your total bill : CHF${total}`;
    alert(output);
}

function calcTips(billAmount, tipRate) {
    let tip = Math.ceil(billAmount * (tipRate / 100));
    return tip;
}

tips();
