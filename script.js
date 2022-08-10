let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  let gameState = "";
  let playerChoice = capitalizeFirstLetter(playerSelection.toLowerCase());
  if (playerChoice === computerSelection) {
    gameState = "Tied";
  } else if (
    (playerChoice == "Rock" && computerSelection == "Scissors") ||
    (playerChoice == "Paper" && computerSelection == "Rock") ||
    (playerChoice == "Scissors" && computerSelection == "Paper")
  ) {
    gameState = `You Win! ${playerChoice} beats ${computerSelection}`;
    playerScore++;
  } else {
    gameState = `You Lose! ${computerSelection} beats ${playerChoice}`;
    computerScore++;
  }
  return gameState;
}

function game() {
  for (let i = 1; i <= 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Choose Rock, Paper or Scissors");
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    return "You Win!";
  } else if (playerScore < computerScore) {
    return "You Lose!";
  } else {
    return "Tie!";
  }
}

console.log(game());
