import "./styles.css";

var possibleWins = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20]
];

var countX = 0;
var countO = 0;
var movesMade = 0;
//var playerTurn = parseInt(prompt("Are you player 1 or 2?", "Type 1 or 2"), 10);
var playerTurn = 1;
function changeValue(tdID) {
  var square = document.getElementById(tdID).innerHTML;
  if (square === "X" || square === "O") {
    alert("Already taken! Pick another one.");
  } else {
    if (playerTurn === 1) {
      document.getElementById(tdID).innerHTML = "X";
      playerTurn++;
      movesMade++;
      isGameOver();
    } else {
      if (playerTurn === 2) {
        document.getElementById(tdID).innerHTML = "O";
        playerTurn--;
        movesMade++;
        isGameOver();
      }
    }
  }
}
window.changeValue = changeValue; //calling made possible from HTML

function isGameOver() {
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 5; j++) {
      var square = document.getElementById(possibleWins[i][j]).innerHTML;
      if (square === "X") {
        countX++;
      }
      if (square === "O") {
        countO++;
      }
    }
    if (countX === 5) {
      alert("Player 1 won!");
      alert("Game is over, new game initializing...");
      newGame();
      break;
    }
    if (countO === 5) {
      alert("Player 2 won!");
      alert("Game is over, new game initializing...");
      newGame();
      break;
    }
    checkForDraw();
    countX = 0;
    countO = 0;
  }
}

function checkForDraw() {
  if (movesMade === 25) {
    if (countX === 5) {
      alert("Player 1 won!");
      alert("Game is over, new game initializing...");
      newGame();
    } else if (countO === 5) {
      alert("Player 2 won!");
      alert("Game is over, new game initializing...");
      newGame();
    } else {
      alert("Draw!");
      alert("Game is over, new game initializing...");
      newGame();
    }
  }
}

function newGame() {
  for (var i = 0; i < 25; i++) {
    document.getElementById(i).innerHTML = "";
  }
  countX = 0;
  countO = 0;
  movesMade = 0;
  playerTurn = 1;
  //playerTurn = parseInt(prompt("Are you player 1 or 2?", "Type 1 or 2"), 10);
}
