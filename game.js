"use strict";

const computerPlay = () => {
    const aleatorio = Math.floor(Math.random() * 3) +1;
    
    if (aleatorio === 1){
        return "Rock";
    }
    else if (aleatorio === 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){

    switch (playerSelection){
        case "rock":
            if (computerSelection === "Paper"){
                computerScore++;
                return "You Lose this round! Paper beats Rock";
            }
            else if (computerSelection === "Scissors"){
                playerScore++;
                return "You Win this round! Rock breaks Scissors";
            }
            else{
                return "Tied round! Computer selects Rock";
            }
        break;
        case "paper":
            if (computerSelection === "Rock"){
                playerScore++;
                return "You Win this round! Paper beats Rock";
            }
            else if (computerSelection === "Scissors"){
                computerScore++;
                return "You Lose this round! Scissors cuts Paper";
            }
            else{
                return "Tied round! Computer selects Paper"
            }
        break;
        case "scissors":
            if (computerSelection === "Paper"){
                playerScore++;
                return "You Win this round! Scissors cuts Paper";
            }
            else if (computerSelection === "Rock"){
                computerScore++;
                return "You Lose this round! Rock breaks Scissors";
            }
            else{
                return "Tied round! Computer selects Scissors";
            }
        break;
        default:
            return "Your selection are wrong. Choose Rock, Paper or Scissors.";
    }
}

function validSelection(playerSelection){
    const Selection = 
        playerSelection === "rock" ||
        playerSelection === "paper" ||
        playerSelection === "scissors";
    
    return Selection;
}

function game(){
    for (let i = 1; i <= 5; i++) {
        let playerSelection= prompt("Choose Rock, Paper or Scissors:").toLowerCase();
        console.log(`Round: ${i}`);
        if (!validSelection(playerSelection)){
            i--;
        }
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Player Score: ${playerScore}\n\n`);
    }
    console.log((playerScore > computerScore)
        ? "Congratulations! You win the game"
        : (computerScore > playerScore)
            ? "Game over! You lose the game"
            : "Game over! It's a tie"
    );
}

let computerScore = 0;
let playerScore = 0;
game();
