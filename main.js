let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice().toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();

console.log(computerSelection);
console.log(humanSelection);

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

// ask user for a choice and save it
function getHumanChoice() {
  return prompt("Choose one: Rock / Paper / Scissors");
}

// show both choices
// compare choices and return a winner
function playRound(humanChoice, computerChoice) {
  // human wins
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    roundOutcome = "win";
    winHand = humanChoice;
    loseHand = computerChoice;
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);

    // computer wins
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    roundOutcome = "lose";
    winHand = computerChoice;
    loseHand = humanChoice;
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  } else {
    console.log("You draw!");
  }

  console.log(`You: ${humanScore}; Computer: ${computerScore}`);
}

playRound(humanSelection, computerSelection);
