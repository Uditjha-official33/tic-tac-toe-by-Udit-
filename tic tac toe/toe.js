console.log("Welcome to Tic Tac Toe");
let music = new Audio("game.mp3");
let turn = new Audio("ting.mp3");
let gameover = new Audio("yes.mp3");
let isgameover = false;
let chance = "X";

// Function to change the turn
const changeChance = () => {
    return chance === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],  // Top row
        [3, 4, 5],  // Middle row
        [6, 7, 8],  // Bottom row
        [0, 3, 6],  // Left column
        [1, 4, 7],  // Middle column
        [2, 5, 8],  // Right column
        [0, 4, 8],  // Diagonal (top-left to bottom-right)
        [2, 4, 6],  // Diagonal (top-right to bottom-left)
    ];

    wins.forEach((e, index) => {
        if (
            (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&
            (boxtext[e[0]].innerText !== "")
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " JEET GAYA HUREEE!";
            isgameover = true;
            gameover.play();
            document.querySelector('.image').getElementsByTagName('img')[0].style.width =" 23vw "
            document.querySelector('.line').style.width= "30vw"

            // Add line transformation
            let line = document.querySelector('.line')
            let positions = [
                [0, 6.3, 0],   // Top row
                [0, 19, 0],  // Middle row
                [0, 32.3, 0],  // Bottom row
                [-13.5,19, 90], // Left column
                [0, 19, 90],  // Middle column
                [13.5, 19, 90], // Right column
                [0, 19, 45],  // Diagonal top-left to bottom-right
                [1.5, 18.5, -45], // Diagonal top-right to bottom-left
            ];

            // Apply the transformation based on the winning index
            line.style.transform = `translate(${positions[index][0]}vw, ${positions[index][1]}vw) rotate(${positions[index][2]}deg)`;
            line.style.width = "38vw"; // Make the line visible

            // Style the winning message
            document.querySelector('.info').style.color = "green";
            document.querySelector('.info').style.fontSize = "3rem";
            
    
        }
    });
};

music.play();

// Main function
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !isgameover) {
            boxtext.innerText = chance; // Update box with current player's move
            chance = changeChance(); // Change the turn
            turn.play(); // Play turn sound
            checkWin(); // Check for a win
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = chance + " KI CHANCE HAI";
            }
        }
    });
});

// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
       // document.querySelector('.line').style.width= "0vw"
    });

    chance = 'X';
     document.querySelector('.line').style.width= "0vw"
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = chance + " KI CHANCE HAI";
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0"; // Reset the line
    document.querySelector('.line').style.transform = "translate(0, 0) rotate(0deg)";
    document.querySelector('.info').style.color = "black";
  
});
