// The most important thing to know is how the game stores its state
// in a variable called cells.

// cells is an array of arrays of cell objects.
// discovered is a bool defining if a cell has been clicked by the player.
// isBomb is a bool defining if a cell has a bomb in it.
// hasBeenFlagged is a bool defining if the player has marked the cell
// with a flag, to indicate a bomb.

//-------task 1-------
// Add bombs in these positions:

// To check that the bombs are place correctly
// you will need to be able to see the playfield.
//  Set CHEAT_REVEAL_ALL to true to do that.

// ------------task 2----------
// Instead of adding bombs in fixed places, add 10 of them in random places.

// Add a BOMBS_COUNT constant so that you can easily change the amount
//of bombs placed. Put it next to the other constants.

// -------------Task 3---------------
// Now that the bombs are randomly placed,
//  experiment with changing the COLS_COUNT, ROWS_COUNT
//  and BOMBS_COUNT values. Try to find a combination that feels good.

// -------------Task 4----------------------
// On each cell, we want to show the number of adjacent bombs.
//  Adjacent bombs are bombs in cells touching our cell (also diagonally).
// When the playfield is rendered, the function countAdjacentBombs()
//  is called and a number is displayed in the cell if the return
//  value is greater than 1.
//  Implement this function so that it returns the correct number.

const ROWS_COUNT = 10;
const COLS_COUNT = 10;

const BOMBS_COUNT = 10;

// Cell constructor
function Cell() {
    this.discovered = false;
    this.isBomb = false;
    this.hasBeenFlagged = false;
}

// Initialize cells
var cells = Array(ROWS_COUNT);
for (var row = 0; row < ROWS_COUNT; row++) {
    cells[row] = Array(COLS_COUNT);
    for (var col = 0; col < COLS_COUNT; col++) {
        cells[row][col] = new Cell();
    }
}

let count1 = 0;
while (BOMBS_COUNT !== count1) {
    // Pick a remaining element...
    randomIndex1 = Math.floor(Math.random() * ROWS_COUNT);
    randomIndex2 = Math.floor(Math.random() * COLS_COUNT);
    cells[randomIndex1][randomIndex2].isBomb = true;
    count1 += 1;
}

row = 0;
col = 0;

let count = 0;
let rrbegin = row - 1 == -1 ? row : row - 1;
let ccbegin = col - 1 == -1 ? col : col - 1;
let rrend = row + 1 == ROWS_COUNT ? row : row + 1;
let ccend = col + 1 == COLS_COUNT ? col : col + 1;
console.log(rrbegin, ccbegin, rrend, ccend);
for (let i = rrbegin; i <= rrend; i++) {
    for (let j = ccbegin; j <= ccend; j++) {
        console.log(i, j);
        if (cells[i][j].isBomb == true) {
            count += 1;
            console.log("inner loop " + i, j);
        }
    }
}

// -------------Task 5-------------
// The next step is to hide all cells by default, and reveal them when clicked.
// To hide the cells, set CHEAT_REVEAL_ALL back to false.
// Now try to figure out how to reveal a cell when it's clicked.
// Hint: the function you should modify is discoverCell.

// ----------------Task 6-----------------
// When revealing a cell that has 0 adjacent bombs (use countAdjacentBombs()
// to determine this), automatically reveal neighbor cells. Ideally,
// these would then also reveal neighbor cells if they have 0 adjacent bombs, and so on.
// Hint: you could do that by calling discoverCell recursively.
// This step is a bit hard, but try to find a solution! If you're
// stuck for too long, you can move on to the next task and come back later.

// ----------------Task 7-------------------
// Implement flags. Flags allow the player to mark cells that they
// think contain a bomb. When clicking a cell and holding shift,
// function flagCell() will be called for you.
// Idea: when clicking on an already flagged cell, remove the flag.
// Idea: prevent discovering a flagged cell.

// ----------------Task 8------------------
// Implement defeat. If the player "discovers" a bomb (clicks on it without holding shift),
//  set the variable defeat to true.
//  The screen will turn read when defeat is set to true (already programmed).

// ------------Task 9----------------------
// Implement stats: the counters currently always display 0

// -------------Task 10---------------------
// Implement victory. If the player has revealed as many cells as they must
//  (every cell that isn't a bomb), set variable victory to true.
