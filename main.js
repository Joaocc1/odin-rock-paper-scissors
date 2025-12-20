const roundCounter = document.querySelector(".round").querySelector("span");
const humanScoreCard = document
  .querySelector(".human-score")
  .querySelector("span");
const computerScoreCard = document
  .querySelector(".computer-score")
  .querySelector("span");
const buttons = document.querySelector("#buttons");
const feedback = document.querySelector("#feedback");

let round = 0;
let humanScore = 0;
let computerScore = 0;
let isGameFinished = false;

buttons.addEventListener("click", (e) => {
  if (isGameFinished) {
  } else {
    let target = Array.from(e.target.classList);
    let choice = target[0];
    console.log(typeof target);
    console.log(Array.isArray(target));
    console.log(target);
    playRound(choice);
  }
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
  let roundOutcome = `Round ${round + 1}: `;

  console.log(typeof humanChoice);
  console.log(typeof computerChoice);

  console.log(`humanChoice variable is ${humanChoice}`);
  console.log(`computerChoice variable is ${computerChoice}`);

  // human wins
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    humanScoreCard.textContent = humanScore;
    roundOutcome += `You win! ${humanChoice} beats ${computerChoice}`;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);

    // computer wins
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore += 1;
    computerScoreCard.textContent = computerScore;
    roundOutcome += `You lose! ${computerChoice} beats ${humanChoice}`;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else {
    roundOutcome += "It's a draw!";
    console.log("It's a draw!");
  }

  console.log(`You: ${humanScore}; Computer: ${computerScore}`);

  return roundOutcome;
}

function playRound(userChoice) {
  let humanSelection = userChoice;
  let computerSelection = getComputerChoice().toLowerCase();

  console.log(`Computer plays ${computerSelection}`);
  console.log(`You play ${humanSelection}`);

  let result = getResult(humanSelection, computerSelection);
  console.log(result);
  round += 1;
  roundCounter.innerText = round;

  console.log(round);

  giveFeedback(result);
  getGameWinner();
}

function giveFeedback(outcome) {
  const paragraph = document.createElement("p");
  paragraph.textContent = outcome;
  feedback.appendChild(paragraph);
}

function getGameWinner() {
  if (humanScore === 5) {
    giveFeedback("Congratulations you win the game!");
    isGameFinished = true;
  } else if (computerScore === 5) {
    giveFeedback("Computer wins the game.");
    isGameFinished = true;
  }
}
