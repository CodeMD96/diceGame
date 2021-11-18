const gameCounter = document.getElementsByClassName("win-tracker");
const start = document.getElementById("start");
const targetLabel = document.getElementById("target-label");
const target = document.getElementById("target-number");
const heading = document.getElementById("heading");
const scoreCards = document.getElementsByClassName("scorecard");
const diceImg = document.getElementById("dice-img")
const roll = document.getElementById("roll");
const call = document.getElementById("call");

let currentPlayer = 0;
let scores = [0, 0];
let playerWins = [0, 0];
let targetNumber = 20;

const playerChange = () =>{
    if (currentPlayer === 0) {
        currentPlayer =1;
        heading.innerHTML = "Player 2's turn";
        document.body.style.backgroundColor = "purple";
    } else {
        currentPlayer =0;
        heading.innerHTML = "Player 1's turn";
        document.body.style.backgroundColor = "indigo";
    };
};

roll.addEventListener("click", () =>{
    let diceRoll = Math.floor(Math.random()*6+1);
    scores[`${currentPlayer}`] += diceRoll;
    scoreCards[`${currentPlayer}`].innerHTML = scores[`${currentPlayer}`];

    diceImg.src = `images/dice${diceRoll}.png`

    if (diceRoll === 1) {
        scores[`${currentPlayer}`] = 0;
        scoreCards[`${currentPlayer}`].innerHTML = scores[`${currentPlayer}`];

        playerChange();
    } else if (scores[`${currentPlayer}`] >= targetNumber) {
        playerWins[`${currentPlayer}`] ++;

        start.innerHTML = "Start again!";
        targetLabel.innerHTML = "Choose target number:"
        heading.innerHTML = `Player ${currentPlayer+1} wins!`;
        gameCounter[`${currentPlayer}`].innerHTML = `Player ${currentPlayer+1}: ${playerWins[currentPlayer]}`;
        start.style.display = "block";
        target.style.display = "block";
        roll.style.display = "none";
        call.style.display = "none";
    };
});

call.addEventListener("click", () =>{
    playerChange();
})

start.addEventListener("click", () =>{
    console.log(Number(target.value));
    if (typeof Number(target.value) === "number" && Number(target.value)) {
        currentPlayer = 0;
    scores = [0, 0];
    targetNumber = target.value;

    document.body.style.backgroundColor = "indigo";
    heading.innerHTML = "Player 1's turn";
    targetLabel.innerHTML = `Target number: ${targetNumber}`;

    scoreCards[0].innerHTML = 0;
    scoreCards[1].innerHTML = 0;
    start.style.display = "none";
    target.style.display = "none";
    roll.style.display = "block";  
    call.style.display = "block";
    };
});