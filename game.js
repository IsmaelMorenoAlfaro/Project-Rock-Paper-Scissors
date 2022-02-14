"use strict";

const computerPlay = () => {
    const aleatorio = Math.floor(Math.random() * 3) +1;  
    if (aleatorio === 1){
        return "rock";
    }
    else if (aleatorio === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    switch (playerSelection.toLowerCase()){
        case "rock":
            if (computerSelection === "paper"){
                computerScore++;
                return "You Lose this round! Paper beats Rock";
            }
            else if (computerSelection === "scissors"){
                playerScore++;
                return "You Win this round! Rock breaks Scissors";
            }
            else{
                return "Tied round! Computer selects Rock";
            }
        break;
        case "paper":
            if (computerSelection === "rock"){
                playerScore++;
                return "You Win this round! Paper beats Rock";
            }
            else if (computerSelection === "scissors"){
                computerScore++;
                return "You Lose this round! Scissors cuts Paper";
            }
            else{
                return "Tied round! Computer selects Paper"
            }
        break;
        case "scissors":
            if (computerSelection === "paper"){
                playerScore++;
                return "You Win this round! Scissors cuts Paper";
            }
            else if (computerSelection === "rock"){
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

function resetGame(playAgain){
    div.removeChild(playAgain);
    div.removeChild(winner);
    body.removeChild(div);
    counter = 0;
    computerScore = 0;
    playerScore = 0;
    $playerScore.textContent = `Player Score: ${playerScore}`;
    $computerScore.textContent = `Computer Score: ${computerScore}`;
    botones.forEach(btn => btn.disabled = false);
    disabledButtons = false;
}

function checkWinner(){
    if (playerScore === 5 && counter >= 5){
        winner.textContent = "Congratulations! You win the game";
        div.appendChild(winner);
        botones.forEach(btn => btn.disabled = true);
        disabledButtons = true;
    } 
    else if (computerScore === 5 && counter >= 5){
        winner.textContent = "Game over! You lose the game";
        div.appendChild(winner);
        botones.forEach(btn => btn.disabled = true);
        disabledButtons = true;
    }
}

function game(){
    botones.forEach(btn =>{
        btn.addEventListener("click", (e) =>{
            result.textContent = (playRound(e.target.textContent, computerPlay()));
            counter++;
            $playerScore.textContent = `Player Score: ${playerScore}`;
            $computerScore.textContent = `Computer Score: ${computerScore}`;
            div.appendChild(result);
            body.appendChild(div);

            checkWinner();

            if (disabledButtons){
                const playAgain = document.createElement("button");
                playAgain.textContent = "Play Again";
                div.appendChild(playAgain);
                playAgain.addEventListener("click", () =>{
                    resetGame(playAgain);
                });
            }
        });
    });
}

let computerScore = 0;
let playerScore = 0;
let counter = 0;
const body = document.querySelector("body");
const div = document.createElement("div");
const result = document.createElement("p");
const $playerScore = document.querySelector(".player-score");
const $computerScore = document.querySelector(".computer-score");
const winner = document.createElement("h2");
const botones = document.querySelectorAll(".container button");
let disabledButtons = false;
game();
