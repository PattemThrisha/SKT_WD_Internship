let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function play(cell, index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  cell.innerText = currentPlayer;

  checkWinner();

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  for (let pattern of winPatterns) {
    let [a,b,c] = pattern;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById("status").innerText =
        board[a] + " Wins 🎉";

      drawLine(pattern);
      gameActive = false;
      return;
    }
  }

  if (!board.includes("")) {
    document.getElementById("status").innerText = "Draw 🤝";
    gameActive = false;
  }
}

/* ✅ PERFECT LINE (NO WRONG POSITION NOW) */
function drawLine(pattern) {
  const cells = document.querySelectorAll(".cell");

  const first = cells[pattern[0]].getBoundingClientRect();
  const last = cells[pattern[2]].getBoundingClientRect();

  const boardRect = document.querySelector(".board").getBoundingClientRect();
  const line = document.getElementById("winLine");

  const x1 = first.left + first.width / 2 - boardRect.left;
  const y1 = first.top + first.height / 2 - boardRect.top;

  const x2 = last.left + last.width / 2 - boardRect.left;
  const y2 = last.top + last.height / 2 - boardRect.top;

  const length = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
  const angle = Math.atan2(y2-y1, x2-x1) * 180 / Math.PI;

  line.style.width = length + "px";
  line.style.transform = `rotate(${angle}deg)`;
  line.style.left = x1 + "px";
  line.style.top = y1 + "px";
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";

  document.querySelectorAll(".cell").forEach(c => c.innerText = "");
  document.getElementById("status").innerText = "";
  document.getElementById("winLine").style.width = "0";
}
