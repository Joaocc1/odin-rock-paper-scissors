let humanScore = 0;
let computerScore = 0;

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

console.log(getComputerChoice());
// ask user for a choice and save it
function getHumanChoice() {
  return prompt("Choose one: Rock / Paper / Scissors");
}

console.log(getHumanChoice());

// show both choices
// compare choices and return a winner
