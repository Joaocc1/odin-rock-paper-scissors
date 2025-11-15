console.log("Hello World");

// write variable that holds computer random choice
function getComputerChoice() {
  let value = Math.round(Math.random() * 2) + 1;

  console.log(value);

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
// show both choices
// compare choices and return a winner
