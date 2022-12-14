let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.button');
buttons.forEach(function (e) {
  e.addEventListener('click', function () {
    if (e === buttons[0]) {
      playerSelection = 'Rock';
    } else if (e === buttons[1]) {
      playerSelection = 'Paper';
    } else {
      playerSelection = 'Scissors';
    }
    game();
  });
});

const disableButton = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
};

function game() {
  const computerSelection = getComputerChoice();
  let roundResult = playRound(playerSelection, computerSelection);
  updateScore(roundResult);
  displayChoice(playerSelection, computerSelection);
  let winner = document.querySelector('.winner');
  if (playerScore == 5) {
    winner.innerHTML = 'You Win!';
    disableButton();
  } else if (computerScore == 5) {
    winner.innerHTML = 'You Lose!';
    disableButton();
  }
}

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  let gameState = '';
  if (playerSelection === computerSelection) {
    gameState = 'Tie!';
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')
  ) {
    gameState = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    gameState = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
  return gameState;
}

function updateScore(roundResult) {
  document.querySelector('.result').innerHTML = roundResult;
  document.querySelector('.player').innerHTML = playerScore;
  document.querySelector('.computer').innerHTML = computerScore;
}

function displayChoice(playerSelection, computerSelection) {
  const p = document.querySelector('.player-selection');
  const c = document.querySelector('.computer-selection');
  switch (playerSelection) {
    case 'Rock':
      p.innerHTML = '<img src="images/477918-200.png" />';
      break;
    case 'Paper':
      p.innerHTML = '<img src="images/477922-200.png" />';
      break;
    case 'Scissors':
      p.innerHTML = '<img src="images/477919-200.png" />';
      break;
  }
  switch (computerSelection) {
    case 'Rock':
      c.innerHTML = '<img src="images/477918-200.png" />';
      break;
    case 'Paper':
      c.innerHTML = '<img src="images/477922-200.png" />';
      break;
    case 'Scissors':
      c.innerHTML = '<img src="images/477919-200.png" />';
      break;
  }
}
