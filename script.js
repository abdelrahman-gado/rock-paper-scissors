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

function getSelections() {
    let computerSelection = computerPlay();
    let playerSelection;
    do {
        playerSelection = prompt("Enter your choice of (rock - paper - scissors): ", "paper");
    } while (playerSelection === null || playerSelection === ""
        || (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"));

    return [computerSelection, playerSelection];
}

function finalGameResult(playerScore, computerScore) {

    if (playerScore > computerScore) {
        console.log("You Win! You scored " + playerScore + " of 5");
    } else {
        console.log("You Lose! You scored " + playerScore + " of 5");
    }
}

function game() {

    let selections = getSelections();
    let computerSelection = selections[0];
    let playerSelection = selections[1];
    

    let playerScore = 0;
    let computerScore = 0;
    
    let rounds = 5;
    while (rounds > 0)
    {
        const roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 0) {
            console.log("It's a Tie");
            computerSelection = computerPlay();
            continue;
        }

        if (roundResult === 1) {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            playerScore++;
        }
        else {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            computerScore++;
        }

        computerSelection = computerPlay();
        rounds--;
    }

    finalGameResult(playerScore, computerScore);
}


game();