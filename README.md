# Tic-tac-toe-game
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe Game</title>
    <link rel="stylesheet" href="style2.css">
</head>
<body>
    <div class="msg-container hide">
        <p id="msg">winner</p>
        <button id="new-btn">New Game</button>
    </div>
    <main>
        <h1>Tac Tac Toe</h1>
        <div class="container">
        <div class="game">
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
        </div>
    </div>
    <button id="reset-btn">Reset Game</button>
    </main>
    <script src="app.js"></script>
</body>
</html>


#css code
*{
    margin: 0;
    padding: 0;
}
body{
    background-color:#2C3E50;
    text-align: center;
}
.container {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items:center;
   
}
.game {
    height: 60vmin;
    width: 60vmin;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;

    gap: 1.5vmin;
}
.box{
    height: 18vmin;
    width: 18vmin;
    border-radius: 1rem;
    border: none;
    box-shadow: 0 0 1rem rgba(0,0,0,0.3);
    font-size: 8vmin;
    color:lightcoral;
    background-color:antiquewhite;
}
#reset-btn{
    padding:1rem;
    font-size: 1.25rem;
    background-color: gray;
    color:aliceblue;
    border-radius: 1rem;
    border: none;
}
#new-btn {
    padding:1rem;
    font-size: 1.25rem;
    background-color: gray;
    color:aliceblue;
    border-radius: 1rem;
    border: none;
}
#msg{
    color:rgb(255, 127, 142);
    font-size:5vmin;
}
.msg-container {
    height:100vmin;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap: 4rem;
}

.hide{
  display:none;
}

#javascript

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // Player O's turn

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Reset game functionality
const resetGame = () => {
    turnO = true; // Reset turn to O
    enableBoxes(); // Enable all boxes for a new game
    msgContainer.classList.add("hide"); // Hide the message container
};

// Event listener for each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { // Only allow if the box is empty
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true; // Disable box after being clicked
            checkWinner(); // Check for a winner after every move
        }
    });
});

// Disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Enable all boxes for a new game
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false; // Enable box for new game
        box.innerText = ""; // Clear box content
    });
};

// Show the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}!`; // Corrected winner message
    msgContainer.classList.remove("hide"); // Show the message container
    disableBoxes(); // Disable boxes after a winner is found
};

// Check if a player has won
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        // Check if all positions in a pattern are filled and equal
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val); // Display winner (either "O" or "X")
            return;
        }
    }
};

// Reset and new game buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
