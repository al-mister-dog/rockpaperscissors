let playerScore = 0;
let computerScore = 0;

const playerScoreElem = document.getElementById('ps')
const computerScoreElem = document.getElementById('cs')
const result = document.getElementById('res')

const rockDiv = document.getElementById('r')
const paperDiv = document.getElementById('p')
const scissorsDiv = document.getElementById('s')


function getComputerChoice() {
  let computer = Math.floor(Math.random() *3);
  if (computer === 0) {
    computer = 'rock'
  } else if (computer === 1) {
    computer = 'paper'
  } else if (computer === 2) {
    computer = 'scissors'
  }
  return computer
}


function playRound(playerChoice) {
  const computerChoice = getComputerChoice()
  if (
    (playerChoice === 'rock' && computerChoice === 'rock') ||
    (playerChoice === 'paper' && computerChoice === 'paper') ||
    (playerChoice === 'scissors' && computerChoice === 'scissors')
     ) {
        draw(playerChoice, computerChoice)
  } 
           //WIN  
   else if (
  (playerChoice === 'rock' && computerChoice === 'scissors') ||
  (playerChoice === 'paper' && computerChoice === 'rock') ||
  (playerChoice === 'scissors' && computerChoice === 'paper')
   ) {
      win(playerChoice, computerChoice)
  }
           //LOSE
   else if (
    (playerChoice === 'rock' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'rock')
    )  {
        lose(playerChoice, computerChoice)
 }
}

function win(playerChoice, computerChoice) {
  playerScore++
  playerScoreElem.innerHTML = playerScore;
  computerScoreElem.innerHTML = computerScore;
  result.innerHTML = playerChoice + ' beats ' + computerChoice + ': you win!'
}
function lose(playerChoice, computerChoice) {
  computerScore++
   playerScoreElem.innerHTML = playerScore;
  computerScoreElem.innerHTML = computerScore;
  result.innerHTML = computerChoice + ' beats ' + playerChoice + ': you lose!' 
}
function draw(playerChoice, computerChoice) {
   playerScoreElem.innerHTML = playerScore;
  computerScoreElem.innerHTML = computerScore;
  result.innerHTML = 'computer chose ' + computerChoice + ' also: draw!'
}


function main() {
  rockDiv.addEventListener('click', function() {
     playRound('rock')
  })

  paperDiv.addEventListener('click', function() {
     playRound('paper')
  })  

  scissorsDiv.addEventListener('click', function() {
   playRound('scissors')
  })  
  }

main()