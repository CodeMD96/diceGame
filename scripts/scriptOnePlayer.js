const startAgain = document.getElementById("start-again");
const heading = document.getElementById("heading");
const scoreCard = document.getElementById("score-card");
const diceImg = document.getElementById("dice-img")
const roll = document.getElementById("roll");

let score = 0

roll.addEventListener("click", () =>{
    let diceRoll = Math.floor(Math.random()*6+1);
    score += diceRoll;
    scoreCard.innerHTML = score;

    diceImg.src = `images/dice${diceRoll}.png`

    if (diceRoll === 1) {
        startAgain.innerHTML = "Too bad, try again!";
        heading.innerHTML = "You lost!";
        startAgain.style.display = "block";
        roll.style.display = "none";
    } else if (score > 20) {
        startAgain.innerHTML = "Start again!";
        heading.innerHTML = "Winner!";
        startAgain.style.display = "block";
        roll.style.display = "none";
    };
});

startAgain.addEventListener("click", () =>{
    score = 0;

    heading.innerHTML = "Player 1";
    scoreCard.innerHTML = score;
    startAgain.style.display = "none";
    roll.style.display = "block";

    
})