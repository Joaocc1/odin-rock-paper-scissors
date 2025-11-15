console.log("Hello World");

// write variable that holds computer random choice
function getComputerChoice() {
  return Math.round(Math.random() * 2) + 1;
}

console.log(getComputerChoice());

// ask user for a choice and save it
// show both choices
// compare choices and return a winner
