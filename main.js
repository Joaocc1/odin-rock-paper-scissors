let roundCounter = document.querySelector(".round").querySelector("span");
let humanScoreCard = document
  .querySelector(".human-score")
  .querySelector("span");
let computerScoreCard = document
  .querySelector(".computer-score")
  .querySelector("span");
let buttons = document.querySelector("#buttons");

let round = 0;
let humanScore = 0;
let computerScore = 0;

buttons.addEventListener("click", (e) => {
  let target = e.target.classList;
  playRound(target);
});

roundCounter.innerText = round;
humanScoreCard.innerText = humanScore;
computerScoreCard.innerText = computerScore;

// write variable that holds computer random choice
function getComputerChoice() {
  let value = Math.round(Math.random() * 2) + 1;

  if (value === 1) {
    return "Rock";
  } else if (value === 2) {
    return "Paper";
  } else if (value === 3) {
    return "Scissors";
  }
}

function getResult(humanChoice, computerChoice) {
  let roundOutcome = "";

  // human wins
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    roundOutcome = "Human wins";
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);

    // computer wins
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    roundOutcome = "Computer wins";
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  } else {
    roundOutcome = "Draw";
    console.log("It's a draw!");
  }

  console.log(`You: ${humanScore}; Computer: ${computerScore}`);

  return roundOutcome;
}

function playRound(humanChoice) {
  let humanSelection = humanChoice;
  let computerSelection = getComputerChoice().toLowerCase();

  console.log(`Computer plays ${computerSelection}`);
  console.log(`You play ${humanSelection}`);

  let result = getResult(humanSelection, computerSelection);
  console.log(result);
  round += 1;
  roundCounter.innerText = round;

  console.log(round);

  // deterrmine winner
  if (result === "Human wins") {
    humanScore += 1;
  } else if (result === "Computer wins") {
    computerScore += 1;
  }
}
