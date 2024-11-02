// let boxes = document.querySelectorAll(".box");
// let resetbtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO= true;//playerx,playerO

// const winpatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ];
// const resetGame= ()=>
// {
//     turn0=true;
//     enabledBoxes();
//     msgContainer.classList.add("hide");
// };
// boxes.forEach(( box )=>{
//     box.addEventListener("click",() => {
       
//         if(turnO){
//             box.innerText = "O";
//             turnO = false;
//         }else{
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true;

//         checkWinner();
//     });
// });
// const disabledBoxes = ()=>{
//     for(let box of boxes ){
//         box.disabled = true;
//     }
// } 
// const enabledBoxes = ()=>{
//     for(let box of boxes ){
//         box.disabled = true;
//         box.innerText="";
//     }
// }
    
// const showWinner = (winner)=>{
//     msg.innerText = 'congratulations,Winner is $(winner)';
//     msg.container.classList.remove("hide");
//     disabledBoxes();
// };
// const checkWinner = () => {
//     for(let pattern of winPatterns){
//         let pos1val = boxes[pattern[0]].innerText;
//         let pos2val = boxes[pattern[1]].innerText;
//         let pos3val = boxes[pattern[2]].innerText;

//         if(pos1val != "" && pos2val!= "" && pos3val !=""){
//             if(pos1val===pos2val && pos2val ===pos3val !=""){
//                 showWinner(pos1val);
//             }
//         }
//     }
// };

// newGameBtn.addEventListener("click",resetGame);
// resetBtn.addEventListener("click",resetGame);


// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true; // Player O's turn

// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// const resetGame = () => {
//     turnO = true; // Corrected typo
//     enableBoxes(); // Renamed from enabledBoxes
//     msgContainer.classList.add("hide");
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (turnO) {
//             box.innerText = "O";
//             turnO = false;
//         } else {
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true;
//         checkWinner(); // Check for a winner after every move
//     });
// });

// const disableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// const enableBoxes = () => { // Fix: Enable boxes
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     }
// };

// const showWinner = (winner) => {
//     msg.innerText = `Congratulations, Winner is ${winner}`; // Corrected interpolation
//     msgContainer.classList.remove("hide"); // Corrected reference to msgContainer
//     disableBoxes(); // Disable boxes after winning
// };

// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         let pos1val = boxes[pattern[0]].innerText;
//         let pos2val = boxes[pattern[1]].innerText;
//         let pos3val = boxes[pattern[2]].innerText;

//         if (pos1val !== "" && pos2val !== "" && pos3val !== "") { // Ensure no empty boxes
//             if (pos1val === pos2val && pos2val === pos3val) { // Check if all values match
//                 showWinner(pos1val); // Show the winner
//             }
//         }
//     }
// };

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);

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


