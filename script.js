const selection = document.querySelectorAll(".select-item");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");
const gameResultPara = document.querySelector(".finalResult");
const playAgainBtn = document.querySelector(".again-div");

playAgainBtn.style.display = "none";

let playerScore = 0;
let computerScore = 0;
let rounds = 5;

selection.forEach( (select) => {
    select.addEventListener("click", (e) => {
        let playerChoice = e.target.classList[0];
        game(playerChoice);
        if (rounds === 0) {
            finalGameResult(playerScore, computerScore);
            playAgainBtn.style.display = "block";
            selection.forEach((select) => {
                select.style.pointerEvents = "none";
            });
        }
    });
});


playAgainBtn.addEventListener("click", (e) => {
    location.reload();
});



function computerPlay() {
    let choices = ["paper", "scissors", "rock"];
    let randomIntIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIntIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "scissors" && computerSelection === "paper")
    {
        return 1; // the player wins
    }
    else if (playerSelection === computerSelection)
    {
        return 0; // the player and the computer have a tie.
    }
    else
    {
        return -1; // the player loses.
    }
}

function finalGameResult(playerScore, computerScore) {

    if (playerScore > computerScore) {
        gameResultPara.textContent = "You Win!!!";
        gameResultPara.style.color = "green";
    } else {
        gameResultPara.textContent = "You Lose!!!";
        gameResultPara.style.color = "red";
    }
}

function game(playerChoice) {
    console.log("Hello World");
    let computerSelection = computerPlay();
    let playerSelection = playerChoice;

    const roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === 0) {
        gameResultPara.textContent = "It's a Tie";
        computerSelection = computerPlay();
    }
    else if (roundResult === 1) {
        gameResultPara.textContent = "You win this round";
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        rounds--;
    }
    else if (roundResult === -1) {
        gameResultPara.textContent = "You lose this round";
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        rounds--;
    }   
}
